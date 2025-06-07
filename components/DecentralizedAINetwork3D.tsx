'use client';
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Line, OrbitControls, Text } from '@react-three/drei';
import * as THREE from 'three';
import { MOUSE } from 'three';

// Node types and colors
const NODE_TYPES = {
  user: { color: '#3498db' },   // blue
  agent: { color: '#2ecc40' },  // green
  tool: { color: '#9b59b6' },   // purple
  llm: { color: '#ff9800' },    // orange
};

// Example network graph
const NODES = [
  // LLMs (shifted further down)
  { id: 100, type: 'llm', position: [0, 8, 2] as [number, number, number] },
  { id: 101, type: 'llm', position: [3, 10, -1] as [number, number, number] },
  { id: 102, type: 'llm', position: [-3, 6, 1] as [number, number, number] },
  // Users (shifted further down)
  { id: 1, type: 'user', position: [-14, -7, 2] as [number, number, number] },
  { id: 2, type: 'user', position: [-11, -10, 3] as [number, number, number] },
  { id: 3, type: 'user', position: [-16, -13, -2] as [number, number, number] },
  { id: 4, type: 'user', position: [-12, -5, -3] as [number, number, number] },
  // Agents (shifted further down)
  { id: 5, type: 'agent', position: [2, -4, 3] as [number, number, number] },
  { id: 6, type: 'agent', position: [7, -2, -1] as [number, number, number] },
  { id: 7, type: 'agent', position: [1, -7, 5] as [number, number, number] },
  { id: 8, type: 'agent', position: [8, -5, 2] as [number, number, number] },
  { id: 9, type: 'agent', position: [5, -6, -3] as [number, number, number] },
  // Tools (shifted further down)
  { id: 10, type: 'tool', position: [15, -6, 2] as [number, number, number] },
  { id: 11, type: 'tool', position: [11, -9, 5] as [number, number, number] },
  { id: 12, type: 'tool', position: [17, -7, -3] as [number, number, number] },
  { id: 13, type: 'tool', position: [13, -3, 1] as [number, number, number] },
];

const EDGES = [
  // LLMs to agents (only connect to agents)
  { from: 100, to: 5 }, { from: 100, to: 6 },
  { from: 101, to: 6 }, { from: 101, to: 7 },
  { from: 102, to: 7 }, { from: 102, to: 5 },
  // Users to agents
  { from: 1, to: 5 }, { from: 1, to: 6 },
  { from: 2, to: 5 }, { from: 2, to: 9 },
  { from: 3, to: 8 }, { from: 3, to: 6 },
  { from: 4, to: 9 }, { from: 4, to: 7 },
  // Agents to agents (peer-to-peer)
  { from: 5, to: 6 }, { from: 6, to: 7 }, { from: 7, to: 8 }, { from: 8, to: 9 }, { from: 9, to: 5 },
  // Agents to tools
  { from: 5, to: 10 }, { from: 6, to: 11 }, { from: 7, to: 12 }, { from: 8, to: 13 },
  { from: 9, to: 10 }, { from: 7, to: 13 }

];

function NodeSphere({ position, color }: { position: [number, number, number]; color: string }) {
  const geometry = useMemo(() => new THREE.SphereGeometry(1.2, 48, 32), []);
  return (
    <mesh geometry={geometry} position={position} castShadow receiveShadow>
      <meshStandardMaterial color={color} metalness={0.2} roughness={0.35} />
    </mesh>
  );
}

function LightningEdge({ from, to }: { from: [number, number, number]; to: [number, number, number] }) {
  // Animated dash effect for zap
  const ref = useRef<THREE.Line | null>(null);
  useFrame(({ clock }) => {
    if (ref.current) {
      const mat = ref.current.material as THREE.LineDashedMaterial;
      if (mat && typeof (mat as any).dashOffset === "number") {
        (mat as any).dashOffset = -clock.getElapsedTime() * 2;
      }
    }
  });
  // Lightning yellow
  return (
    <Line
      ref={ref}
      points={[from, to]}
      color="#ffe066"
      lineWidth={2}
      dashed
      dashSize={0.4}
      gapSize={0.2}
      opacity={0.95}
      transparent
    />
  );
}

// Communication edge (solid cyan, slightly offset)
function CommunicationEdge({ from, to }: { from: [number, number, number]; to: [number, number, number] }) {
  // Offset the edge slightly in 3D space so it doesn't overlap the lightning edge
  const offset = 0.6;
  const dir = [to[0] - from[0], to[1] - from[1], to[2] - from[2]];
  const len = Math.sqrt(dir[0]**2 + dir[1]**2 + dir[2]**2) || 1;
  // Perpendicular offset vector (simple: swap x/y, negate one, ignore z)
  const perp = [-dir[1]/len*offset, dir[0]/len*offset, 0];
  const fromOffset = [from[0] + perp[0], from[1] + perp[1], from[2] + perp[2]];
  const toOffset = [to[0] + perp[0], to[1] + perp[1], to[2] + perp[2]];
  // Animated dash effect for communication flow
  const ref = useRef<THREE.Line | null>(null);
  useFrame(({ clock }) => {
    if (ref.current) {
      const mat = ref.current.material as THREE.LineDashedMaterial;
      if (mat && typeof (mat as any).dashOffset === "number") {
        (mat as any).dashOffset = -clock.getElapsedTime() * 1.2;
      }
    }
  });
  return (
    <Line
      ref={ref}
      points={[fromOffset, toOffset]}
      color="#00e0ff"
      lineWidth={1.7}
      dashed
      dashSize={0.22}
      gapSize={0.18}
      opacity={0.85}
      transparent
    />
  );
}

// Utility: get group center
function groupCenter(nodes: { position: [number, number, number] }[]) {
  const n = nodes.length;
  const sum = nodes.reduce((acc, node) => [acc[0]+node.position[0], acc[1]+node.position[1], acc[2]+node.position[2]], [0,0,0]);
  return [sum[0]/n, sum[1]/n, sum[2]/n] as [number, number, number];
}

function GroupArea({ nodes, color, label }: { nodes: { position: [number, number, number] }[], color: string, label: string }) {
  // Get center and bounding box
  const center = groupCenter(nodes);
  // Compute rough bounding sphere radius
  const maxDist = Math.max(...nodes.map(n => Math.sqrt(
    Math.pow(n.position[0] - center[0], 2) +
    Math.pow(n.position[1] - center[1], 2) +
    Math.pow(n.position[2] - center[2], 2)
  )));
  return (
    <group>
      {/* Shaded area as transparent sphere/ellipsoid */}
      <mesh position={center}>
        <sphereGeometry args={[maxDist + 2, 32, 24]} />
        <meshStandardMaterial color={color} transparent opacity={0.13} depthWrite={false} />
      </mesh>
      {/* Group label above */}
      <Text
        position={[center[0], center[1] + maxDist + 2.5, center[2]]}
        fontSize={2}
        color={color}
        anchorX="center"
        anchorY="middle"
        outlineColor="#000"
        outlineWidth={0.08}
      >
        {label}
      </Text>
    </group>
  );
}

export default function DecentralizedAINetwork3D() {
  // Map node ids to positions
  const nodeMap = useMemo(
    () => Object.fromEntries(NODES.map(n => [n.id, n.position as [number, number, number]])),
    []
  );
  return (
    <div style={{ width: '100%', height: '600px', background: '#191a24', position: 'relative' }}>
      {/* Legend Overlay */}
      <div style={{
        position: 'absolute',
        top: 18,
        right: 18,
        background: 'rgba(30,32,44,0.92)',
        borderRadius: 8,
        padding: '14px 18px 10px 18px',
        boxShadow: '0 2px 8px #000a',
        zIndex: 10,
        color: '#fff',
        fontSize: 15,
        minWidth: 160
      }}>
        <div style={{ marginBottom: 8, fontWeight: 600, letterSpacing: 0.5 }}>Legend</div>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 6 }}>
          <svg width="38" height="8" style={{ marginRight: 8 }}>
            <line x1="2" y1="4" x2="36" y2="4" stroke="#ffe066" strokeWidth="3" strokeDasharray="7,4" />
          </svg>
          <span style={{ color: '#ffe066' }}>Bitcoin Lightning</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <svg width="38" height="8" style={{ marginRight: 8 }}>
            <line x1="2" y1="4" x2="36" y2="4" stroke="#00e6ff" strokeWidth="3" strokeDasharray="5,4" />
          </svg>
          <span style={{ color: '#00e6ff' }}>Nostr Communication</span>
        </div>
      </div>
      <Canvas camera={{ position: [0, 0, 36], fov: 60 }} shadows>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1.2} castShadow />
        <OrbitControls
          enablePan={true}
          enableZoom={true}
          enableRotate={false}
          minDistance={15}
          maxDistance={30}
          makeDefault
          zoomToCursor
          mouseButtons={{ LEFT: MOUSE.PAN, MIDDLE: MOUSE.DOLLY, RIGHT: MOUSE.ROTATE }}
          target={[0, 0, 0]}
          dampingFactor={0.1}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
          minAzimuthAngle={0}
          maxAzimuthAngle={0}
          onChange={(e) => {
            const t = e.target.target;
            t.x = Math.max(-24, Math.min(24, t.x));
            t.y = Math.max(-16, Math.min(16, t.y));
            t.z = Math.max(-24, Math.min(24, t.z));
          }}
        />
        {/* Group shaded areas and labels */}
        <GroupArea
          nodes={NODES.filter(n => n.type === 'llm')}
          color={NODE_TYPES.llm.color}
          label="LLMs"
        />
        <GroupArea
          nodes={NODES.filter(n => n.type === 'user')}
          color={NODE_TYPES.user.color}
          label="Users"
        />
        <GroupArea
          nodes={NODES.filter(n => n.type === 'agent')}
          color={NODE_TYPES.agent.color}
          label="Agents"
        />
        <GroupArea
          nodes={NODES.filter(n => n.type === 'tool')}
          color={NODE_TYPES.tool.color}
          label="Tools"
        />
        {/* Edges (zaps & communication) */}
        {EDGES.map((edge, i) => {
          // Check if this is user-agent or agent-tool
          const fromNode = NODES.find(n => n.id === edge.from);
          const toNode = NODES.find(n => n.id === edge.to);
          const isUserAgent = fromNode && fromNode.type === 'user' && toNode && toNode.type === 'agent';
          const isAgentTool = fromNode && fromNode.type === 'agent' && toNode && toNode.type === 'tool';
          return (
            <React.Fragment key={i}>
              <LightningEdge from={nodeMap[edge.from]} to={nodeMap[edge.to]} />
              {(isUserAgent || isAgentTool) && (
                <CommunicationEdge from={nodeMap[edge.from]} to={nodeMap[edge.to]} />
              )}
            </React.Fragment>
          );
        })}
        {/* Nodes */}
        {NODES.map((node) => (
          <NodeSphere
            key={node.id}
            position={node.position as [number, number, number]}
            color={NODE_TYPES[node.type as keyof typeof NODE_TYPES].color}
          />
        ))}
      </Canvas>
    </div>
  );
}