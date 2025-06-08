'use client';
import React, { useRef, useMemo } from 'react';
import { useTheme } from 'next-themes';
import { Canvas, useFrame } from '@react-three/fiber';
import { Line, OrbitControls, Text, Html } from '@react-three/drei';
import * as THREE from 'three';
import { Line2, LineSegments2 } from 'three-stdlib';
import { MOUSE } from 'three';

// Node types and colors
const NODE_TYPES = {
  user: { color: '#3498db' },   // blue
  agent: { color: '#2ecc40' },  // green
  tool: { color: '#9b59b6' },   // purple
  llm: { color: '#ff9800' },    // orange
};

// Arrange nodes in a circle (for agents)
function arrangeCircle(center: [number, number, number], radius: number, count: number, _zJitter: number = 0, tilt: number = 0) {
  return Array.from({ length: count }, (_, i) => {
    const angle = (2 * Math.PI * i) / count + tilt;
    const x = center[0] + radius * Math.cos(angle);
    const y = center[1] + radius * Math.sin(angle);
    const z = center[2];
    return [x, y, z] as [number, number, number];
  });
}
// Arrange nodes in a horizontal line (for LLMs)
function arrangeHorizontalLine(center: [number, number, number], count: number, spacing: number = 3) {
  const totalWidth = (count - 1) * spacing;
  return Array.from({ length: count }, (_, i) => {
    const x = center[0] - totalWidth / 2 + i * spacing;
    const y = center[1];
    const z = center[2];
    return [x, y, z] as [number, number, number];
  });
}
// Arrange nodes in a vertical line (for tools and users)
function arrangeVerticalLine(center: [number, number, number], count: number, spacing: number = 2) {
  const totalHeight = (count - 1) * spacing;
  return Array.from({ length: count }, (_, i) => {
    const x = center[0];
    const y = center[1] - totalHeight / 2 + i * spacing;
    const z = center[2];
    return [x, y, z] as [number, number, number];
  });
}

// Define group centers
const GROUP_LAYOUT = {
  llm:   { center: [0, 7, 0] as [number, number, number], radius: 3.5, zJitter: 1 },
  user:  { center: [-14, -5, 0] as [number, number, number], radius: 3.5, zJitter: 1 },
  agent: { center: [0, -7, 0] as [number, number, number], radius: 5, zJitter: 1.2 },
  tool:  { center: [14, -5, 0] as [number, number, number], radius: 5, zJitter: 1 },
};

// Node IDs per group (order preserved)
const LLM_IDS = [100, 101, 102, 103];
const USER_IDS = [1, 2, 3];
const AGENT_IDS = [5, 6, 7, 8, 9, 14];
const TOOL_IDS = [10, 11, 12, 13];

const NODES = [
  // LLMs (horizontal line, more spread out)
  ...LLM_IDS.map((id, i, arr) => ({
    id,
    type: 'llm',
    position: arrangeHorizontalLine(GROUP_LAYOUT.llm.center, arr.length, 2.7)[i],
  })),
  // Users (vertical line, spaced out)
  ...USER_IDS.map((id, i, arr) => ({
    id,
    type: 'user',
    position: arrangeVerticalLine(GROUP_LAYOUT.user.center, arr.length, 3)[i],
  })),
  // Agents
  ...AGENT_IDS.map((id, i, arr) => ({
    id,
    type: 'agent',
    position: arrangeCircle(GROUP_LAYOUT.agent.center, GROUP_LAYOUT.agent.radius, arr.length, GROUP_LAYOUT.agent.zJitter)[i],
  })),
  // Tools (vertical line, spaced out)
  ...TOOL_IDS.map((id, i, arr) => ({
    id,
    type: 'tool',
    position: arrangeVerticalLine(GROUP_LAYOUT.tool.center, arr.length, 3)[i],
  })),
];

// Helper: generate all unique agent-to-agent edges (nostr communication)
// Generate ring topology (each agent connects to next, bidirectional)
function generateAgentRingEdges(agentIds: number[]) {
  const edges = [];
  for (let i = 0; i < agentIds.length; i++) {
    const from = agentIds[i];
    const to = agentIds[(i + 1) % agentIds.length];
    edges.push({ from, to });
    edges.push({ from: to, to: from });
  }
  return edges;
}

const EDGES = [
  // LLMs to agents (only connect to agents)
  { from: 5, to: 100 }, { from: 6, to: 100 },
  { from: 7, to: 101 }, { from: 8, to: 101 },
  { from: 9, to: 102 }, { from: 5, to: 102 },
  // Users to agents
  { from: 1, to: 5 }, { from: 1, to: 6 },
  { from: 2, to: 5 }, { from: 2, to: 9 },
  { from: 3, to: 8 }, { from: 3, to: 6 },
  { from: 4, to: 9 }, { from: 4, to: 7 },
  // Agents to tools
  { from: 5, to: 10 }, { from: 6, to: 11 }, { from: 7, to: 12 }, { from: 8, to: 13 },
  { from: 9, to: 10 }, { from: 7, to: 13 },
];

// Nostr communication edges between all agents
const NOSTR_EDGES = generateAgentRingEdges(AGENT_IDS);
// Lightning edges between all agents
const LIGHTNING_AGENT_EDGES = generateAgentRingEdges(AGENT_IDS);
// Bidirectional communication edges (blue) between users and agents
// Each user connects to only the first two agents (bidirectional)
function generateUserAgentEdges(userIds: number[], agentIds: number[]) {
  const edges = [];
  for (let u of userIds) {
    for (let i = 0; i < Math.min(2, agentIds.length); i++) {
      const a = agentIds[i];
      edges.push({ from: u, to: a });
      edges.push({ from: a, to: u });
    }
  }
  return edges;
}
const USER_AGENT_COMM_EDGES = generateUserAgentEdges(USER_IDS, AGENT_IDS);
// Bidirectional communication edges (blue) between agents and tools
// Each agent connects to only the first two tools (bidirectional)
function generateAgentToolEdges(agentIds: number[], toolIds: number[]) {
  const edges = [];
  for (let a of agentIds) {
    for (let i = 0; i < Math.min(2, toolIds.length); i++) {
      const t = toolIds[i];
      edges.push({ from: a, to: t });
      edges.push({ from: t, to: a });
    }
  }
  return edges;
}
const AGENT_TOOL_COMM_EDGES = generateAgentToolEdges(AGENT_IDS, TOOL_IDS);

function NodeSphere({ position, color }: { position: [number, number, number]; color: string }) {
  const geometry = useMemo(() => new THREE.SphereGeometry(1.2, 48, 32), []);
  return (
    <mesh position={position} geometry={geometry} castShadow receiveShadow>
      {/* Professional, visible node with glow */}
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.22} metalness={0.18} roughness={0.38} />
    </mesh>
  );
}

// Type guard for dashOffset
function hasDashOffset(
  mat: THREE.Material | THREE.Material[]
): mat is THREE.LineDashedMaterial & { dashOffset: number } {
  return !!mat && "dashOffset" in mat && typeof (mat as { dashOffset?: unknown }).dashOffset === "number";
}

function LightningEdge({ from, to }: { from: [number, number, number]; to: [number, number, number] }) {
  const ref = useRef<Line2 | LineSegments2 | null>(null);
  useFrame(({ clock }) => {
    if (ref.current) {
      const mat = ref.current.material;
      if (hasDashOffset(mat)) {
        mat.dashOffset = -clock.getElapsedTime() * 2;
      }
    }
  });
  return (
    <Line
      ref={ref}
      points={[from, to]}
      color="#ffe066"
      lineWidth={2.2}
      dashed
      dashSize={0.4}
      gapSize={0.2}
      opacity={0.98}
      transparent
    />
  );
}

// Communication edge (solid cyan, slightly offset)
function CommunicationEdge({ from, to }: { from: [number, number, number]; to: [number, number, number] }) {
  const offset = 0.6;
  const dir = [to[0] - from[0], to[1] - from[1], to[2] - from[2]];
  const len = Math.sqrt(dir[0]**2 + dir[1]**2 + dir[2]**2) || 1;
  const perp = [-dir[1]/len*offset, dir[0]/len*offset, 0];
  const fromOffset = [from[0] + perp[0], from[1] + perp[1], from[2] + perp[2]] as [number, number, number];
  const toOffset = [to[0] + perp[0], to[1] + perp[1], to[2] + perp[2]] as [number, number, number];
  // Animated dash effect for communication flow
  const ref = useRef<Line2 | LineSegments2 | null>(null);
  useFrame(({ clock }) => {
    if (ref.current) {
      const mat = ref.current.material;
      if (hasDashOffset(mat)) {
        mat.dashOffset = -clock.getElapsedTime() * 1.2;
      }
    }
  });
  return (
    <Line
      ref={ref}
      points={[fromOffset, toOffset]}
      color="#00e0ff"
      lineWidth={2}
      dashed
      dashSize={0.22}
      gapSize={0.18}
      opacity={0.93}
      transparent
    />
  );
}

// Utility: get group center
function groupCenter(nodes: { position: [number, number, number] }[] | undefined) {
  if (!Array.isArray(nodes) || nodes.length === 0) return [0, 0, 0];
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
      {/* Shaded area as transparent sphere/ellipsoid with subtle border and blur */}
      <mesh position={center} renderOrder={-1}>
        <sphereGeometry args={[maxDist + 2, 48, 32]} />
        <meshStandardMaterial color={color} transparent opacity={0.09} depthWrite={false} />
        <meshPhysicalMaterial
          color={color}
          transparent
          opacity={0.12}
          roughness={0.8}
          clearcoat={0.5}
          clearcoatRoughness={0.8}
          transmission={0.7}
          depthWrite={false}
        />
      </mesh>
      {/* Group label above, with pill background */}
      <Html position={[center[0], center[1] + maxDist + 2.7, center[2]]} center style={{ pointerEvents: 'none' }}>
        <div style={{
          background: 'rgba(255,255,255,0.93)',
          color: '#222',
          fontWeight: 700,
          fontSize: 18,
          borderRadius: 18,
          padding: '7px 22px',
          boxShadow: '0 2px 16px #0002',
          letterSpacing: 1.2,
          border: `2px solid ${color}`,
          textShadow: '0 2px 8px #fff, 0 1px 1px #bbb',
          fontFamily: 'Inter, Segoe UI, Arial, sans-serif',
        }}>{label}</div>
      </Html>
    </group>
  );
}

// Add responsive CSS for the canvas container
if (typeof window !== "undefined") {
  const styleId = "responsive-3d-canvas-style";
  if (!document.getElementById(styleId)) {
    const style = document.createElement("style");
    style.id = styleId;
    style.innerHTML = `
      .responsive-3d-canvas-container {
        height: 600px;
      }
      @media (max-width: 640px) {
        .responsive-3d-canvas-container {
          height: 350px !important;
        }
      }
    `;
    document.head.appendChild(style);
  }
}

export default function DecentralizedAINetwork3D() {
  const { resolvedTheme } = useTheme();
  // Choose background colors based on theme
  const bgColor = resolvedTheme === 'dark' ? '#191a24' : '#fff';
  const legendBg = resolvedTheme === 'dark' ? 'rgba(30,32,44,0.92)' : 'rgba(245,247,250,0.92)';
  const legendText = resolvedTheme === 'dark' ? '#fff' : '#111'; // darker text for light mode
  // Map node ids to positions
  const nodeMap = useMemo(
    () => Object.fromEntries(NODES.map(n => [n.id, n.position as [number, number, number]])),
    []
  );
  return (
    <div
      style={{
        width: '100%',
        maxWidth: '100vw',
        height: '600px',
        background: bgColor,
        position: 'relative',
      }}
      className="responsive-3d-canvas-container"
    >
      {/* Legend Overlay */}
      <div
        style={{
          position: 'absolute',
          top: 18,
          right: 18,
          background: legendBg,
          borderRadius: 8,
          padding: '14px 18px 10px 18px',
          boxShadow: '0 2px 8px #000a',
          zIndex: 10,
          color: legendText,
          fontSize: 15,
          minWidth: 160,
          textShadow: resolvedTheme === 'dark'
            ? '0 1px 2px #000a'
            : '0 1px 4px #fff, 0 0px 1px #bbb', // more contrast for light mode
        }}
      >
        <div style={{ fontWeight: 600, marginBottom: 8, letterSpacing: 0.5 }}>Legend</div>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 6 }}>
          <svg width="38" height="8" style={{ marginRight: 8 }}>
            <line x1="2" y1="4" x2="36" y2="4" stroke="#ffe066" strokeWidth="3" strokeDasharray="7,4" />
          </svg>
          <span style={{ color: resolvedTheme === 'dark' ? '#ffe066' : '#111' }}>Bitcoin Lightning</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <svg width="38" height="8" style={{ marginRight: 8 }}>
            <line x1="2" y1="4" x2="36" y2="4" stroke="#00e6ff" strokeWidth="3" strokeDasharray="5,4" />
          </svg>
          <span style={{ color: resolvedTheme === 'dark' ? '#00e6ff' : '#111' }}>Nostr Communication</span>
        </div>
      </div>
      <Canvas camera={{ position: [0, 0, 36], fov: 60 }} shadows>
        <color attach="background" args={[bgColor]} />
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
            if (!e) return;
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
        {/* Edges: Render after group areas so they appear above bubbles */}
        {/* Lightning Edges (zaps) */}
        {EDGES.map((edge, i) => {
          // Only render LightningEdge for non-agent<->agent edges
          const fromNode = NODES.find(n => n.id === edge.from);
          const toNode = NODES.find(n => n.id === edge.to);
          const isAgentToAgent = fromNode && fromNode.type === 'agent' && toNode && toNode.type === 'agent';
          if (isAgentToAgent) return null;
          return <LightningEdge key={i} from={nodeMap[edge.from]} to={nodeMap[edge.to]} />;
        })}
        {/* Lightning Edges (yellow, between all agents) */}
        {LIGHTNING_AGENT_EDGES.map((edge, i) => (
          <LightningEdge key={"lightning-agent-" + i} from={nodeMap[edge.from]} to={nodeMap[edge.to]} />
        ))}
        {/* Nostr Communication Edges (blue, between all agents) */}
        {NOSTR_EDGES.map((edge, i) => (
          <CommunicationEdge key={"nostr-" + i} from={nodeMap[edge.from]} to={nodeMap[edge.to]} />
        ))}
        {/* User-Agent Communication Edges (blue, bidirectional) */}
        {USER_AGENT_COMM_EDGES.map((edge, i) => (
          <CommunicationEdge key={"user-agent-comm-" + i} from={nodeMap[edge.from]} to={nodeMap[edge.to]} />
        ))}
        {/* Agent-Tool Communication Edges (blue, bidirectional) */}
        {AGENT_TOOL_COMM_EDGES.map((edge, i) => (
          <CommunicationEdge key={"agent-tool-comm-" + i} from={nodeMap[edge.from]} to={nodeMap[edge.to]} />
        ))}
        {/* Nodes: Always render last so they appear on top of edges */}
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