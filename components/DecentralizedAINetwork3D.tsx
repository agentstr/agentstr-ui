'use client';
import React, { useRef, useMemo } from 'react';
import { useTheme } from 'next-themes';
import { Canvas, useFrame } from '@react-three/fiber';
import { Line, OrbitControls, Html } from '@react-three/drei';
import * as THREE from 'three';
import { Line2, LineSegments2 } from 'three-stdlib';
import { MOUSE } from 'three';

// Node types and colors
const NODE_TYPES = {
  user: { color: '#3498db' },   // blue
  agent: { color: '#2ecc40' },  // green
  tool: { color: '#9b59b6' },   // purple
};

// Arrange nodes in a circle (for agents)
function arrangeCircle(center: [number, number, number], radius: number, count: number, tilt: number = 0) {
  return Array.from({ length: count }, (_, i) => {
    const angle = (2 * Math.PI * i) / count + tilt;
    const x = center[0] + radius * Math.cos(angle);
    const y = center[1] + radius * Math.sin(angle);
    const z = center[2];
    return [x, y, z] as [number, number, number];
  });
}
function rotateY([x, y, z]: [number, number, number], angle: number, center: [number, number, number] = [0, 0, 0]): [number, number, number] {
  // Rotates a point around the Y axis about a center
  const dx = x - center[0];
  const dz = z - center[2];
  return [
    center[0] + dx * Math.cos(angle) + dz * Math.sin(angle),
    y,
    center[2] - dx * Math.sin(angle) + dz * Math.cos(angle),
  ];
}
// Arrange nodes in a 3D Fibonacci sphere (for large tool clusters)
function arrangeFibonacciSphere(center: [number, number, number], radius: number, count: number): [number, number, number][] {
  // Distributes points evenly on a sphere
  const points: [number, number, number][] = [];
  const offset = 2 / count;
  const increment = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < count; i++) {
    const y = ((i * offset) - 1) + (offset / 2);
    const r = Math.sqrt(1 - y * y);
    const phi = i * increment;
    const x = Math.cos(phi) * r;
    const z = Math.sin(phi) * r;
    points.push([
      center[0] + radius * x,
      center[1] + radius * y,
      center[2] + radius * z
    ]);
  }
  return points;
}


// Arrange nodes in a square (for LLMs)


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


// Define group centers
const groupSpacing = 14;
const GROUP_LAYOUT = {
  user:  { center: [-11, -5, 0] as [number, number, number], radius: 2, zJitter: 1 }, // front
  agent: { center: [-1, -3, -groupSpacing] as [number, number, number], radius: 5, zJitter: 1.2 }, // middle
  tool:  { center: [24, 3, -3.5 * groupSpacing] as [number, number, number], radius: 12, zJitter: 1 }, // back
};

// Node IDs per group (order preserved)

const USER_IDS = [1, 2, 3];
const AGENT_IDS = [5, 6, 7, 8, 9, 14];
const TOOL_IDS = [10, 11, 12, 13, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28];

const NODES: NodeType[] = [
  // Users (horizontal line, rotated into screen around Y axis)
  ...(() => {
    const base = arrangeHorizontalLine(GROUP_LAYOUT.user.center, USER_IDS.length, 4.5);
    const rotated = base.map(pos => rotateY(pos, -Math.PI/6, GROUP_LAYOUT.user.center));
    return USER_IDS.map((id, i) => ({
      id,
      type: 'user' as const,
      position: rotated[i],
    }));
  })(),
  // Agents (circle, rotated into screen around Y axis)
  ...(() => {
    const base = arrangeCircle(GROUP_LAYOUT.agent.center, GROUP_LAYOUT.agent.radius, AGENT_IDS.length, GROUP_LAYOUT.agent.zJitter);
    const rotated = base.map(pos => rotateY(pos, -Math.PI/6, GROUP_LAYOUT.agent.center));
    return AGENT_IDS.map((id, i) => ({
      id,
      type: 'agent' as const,
      position: rotated[i],
    }));
  })(),
  // Tools (Fibonacci sphere cluster)
  ...(() => {
    const positions = arrangeFibonacciSphere(GROUP_LAYOUT.tool.center, GROUP_LAYOUT.tool.radius, TOOL_IDS.length);
    return TOOL_IDS.map((id, i) => ({
      id,
      type: 'tool' as const,
      position: positions[i],
    }));
  })(),
];


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


function groupCenter(nodes: { position: [number, number, number] }[] | undefined) {
  if (!Array.isArray(nodes) || nodes.length === 0) return [0, 0, 0];
  const n = nodes.length;
  let x = 0, y = 0, z = 0;
  for (const node of nodes) {
    // Defensive: ensure node.position is a valid tuple
    if (!node.position || node.position.length !== 3) continue;
    x += node.position[0];
    y += node.position[1];
    z += node.position[2];
  }
  // If no valid positions found, return [0,0,0]
  if (n === 0) return [0, 0, 0];
  return [x / n, y / n, z / n];
}

interface NodeType {
  id: number;
  type: 'user' | 'agent' | 'tool';
  position: [number, number, number];
}

function GroupArea({ nodes, color, label, resolvedTheme = 'light' }: { nodes: NodeType[]; color: string; label: string; resolvedTheme?: string }) {
  if (!Array.isArray(nodes) || nodes.length === 0) return null;
  // Get center and bounding box
  const center = groupCenter(nodes);
  // Compute rough bounding sphere radius
  const dists = Array.isArray(nodes) && nodes.length > 0
    ? nodes
        .filter((n: { position: [number, number, number] }) => Array.isArray(n.position) && n.position.length === 3)
        .map((n: { position: [number, number, number] }) => Math.sqrt(
          Math.pow(n.position[0] - center[0], 2) +
          Math.pow(n.position[1] - center[1], 2) +
          Math.pow(n.position[2] - center[2], 2)
        ))
    : [];

  const maxDist = dists.length > 0 ? Math.max(...dists) : 0;
  const groupArea = (
    <group>
      {/* Shaded area as transparent sphere/ellipsoid with subtle border and blur */}
      <mesh position={Array.isArray(center) && center.length === 3 ? center as [number, number, number] : [0, 0, 0]} renderOrder={-1}>
        <sphereGeometry args={[
          label === 'Users' ? maxDist + 2 :
          label === 'Agents' ? maxDist + 4 :
          label === 'Tools' ? maxDist + 8 :
          maxDist + 2,
          48, 32]} />
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
      {/* Improved group label positioning and style */}
      <Html
        position={(() => {
          const sphereRadius = label === 'Users' ? maxDist + 1 : label === 'Agents' ? maxDist + 4 : label === 'Tools' ? maxDist + 8 : maxDist + 2;
          return [
            center[0] - sphereRadius * 0.4,
            center[1] + sphereRadius * 1.4,
            center[2]
          ];
        })()}
        center
        style={(() => {
          // Responsive tweaks for mobile
          let isMobile = false;
          if (typeof window !== 'undefined' && window.matchMedia) {
            isMobile = window.matchMedia('(max-width: 640px)').matches;
          }
          return {
            pointerEvents: 'none',
            background: resolvedTheme === 'dark' ? 'rgba(30,32,44,0.80)' : 'rgba(245,247,250,0.93)',
            color: resolvedTheme === 'dark' ? '#fff' : '#222',
            borderRadius: isMobile ? '0.9em' : '1.3em',
            padding: isMobile ? '0.25em 0.7em' : '0.38em 1.3em',
            fontWeight: 700,
            fontSize: isMobile ? '0.98em' : '1.35em',
            boxShadow: resolvedTheme === 'dark'
              ? '0 2px 12px 0 rgba(0,0,0,0.23)'
              : '0 2px 12px 0 rgba(180,180,180,0.10)',
            textAlign: 'center',
            letterSpacing: '0.03em',
            textShadow: resolvedTheme === 'dark'
              ? '0 2px 8px #000, 0 0px 1px #000'
              : '0 1px 4px #fff, 0 0.5px 1px #fff',
            transform: 'translateZ(0)',
            border: `1.5px solid ${color}`,
            opacity: 0.93,
            minWidth: isMobile ? '3.8em' : '5.5em',
            userSelect: 'none',
          };
        })()}
      >
        {label}
      </Html>
    </group>
  );
  return groupArea;
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
  // Dynamic edge animation state
  interface DynamicPath {
  user: number;
  agent: number;
  targets: { type: 'tool' | 'agent'; id: number }[];
  secondaryAgentToolTargets?: { agent: number; tools: number[] }[];
  startedAt: number; // ms
  duration: number; // ms
  step: number; // which step in the path (for sequential agent hops)
}

const [activePaths, setActivePaths] = React.useState<DynamicPath[]>([]);

React.useEffect(() => {
  let running = true;

  function startNewPath(offsetMs = 0) {
    setTimeout(() => {
      if (!running) return;
      // Pick a random user
      const user = USER_IDS[Math.floor(Math.random() * USER_IDS.length)];
      // Pick a random agent
      const agent = AGENT_IDS[Math.floor(Math.random() * AGENT_IDS.length)];
      // Pick 2-4 random tools and/or agents as targets
      const targets: { type: 'tool' | 'agent', id: number }[] = [];
      const toolCount = 2 + Math.floor(Math.random() * 3);
      const shuffledTools = [...TOOL_IDS].sort(() => Math.random() - 0.5).slice(0, toolCount);
      for (const t of shuffledTools) targets.push({ type: 'tool', id: t });
      // Optionally add 1-2 agent targets (not the selected agent)
      const agentTargets = AGENT_IDS.filter(a => a !== agent);
      const secondaryAgents: number[] = [];
      if (agentTargets.length > 0 && Math.random() < 0.7) {
        const n = 1 + Math.floor(Math.random() * 2);
        const shuffledAgents = [...agentTargets].sort(() => Math.random() - 0.5).slice(0, n);
        for (const a of shuffledAgents) {
          targets.push({ type: 'agent', id: a });
          secondaryAgents.push(a);
        }
      }
      // For each secondary agent, sometimes connect it to a few random tools
      const secondaryAgentToolTargets: { agent: number, tools: number[] }[] = [];
      for (const secAgent of secondaryAgents) {
        if (Math.random() < 0.95) {
          const toolCount2 = 2 + Math.floor(Math.random() * 3); // 2-4 tools
          const shuffledTools2 = [...TOOL_IDS].sort(() => Math.random() - 0.5).slice(0, toolCount2);
          secondaryAgentToolTargets.push({ agent: secAgent, tools: shuffledTools2 });
        }
      }
      const now = Date.now();
      const duration = 400 + Math.floor(Math.random() * 800); // 0.4s - 1.2s
      setActivePaths(paths => [
        ...paths,
        {
          user,
          agent,
          targets,
          secondaryAgentToolTargets,
          startedAt: now,
          duration,
          step: 0,
        },
      ]);
    }, offsetMs);
  }

  // Start 2-4 concurrent paths, staggered by 0-1s
  const concurrent = 2 + Math.floor(Math.random() * 3);
  for (let i = 0; i < concurrent; ++i) {
    startNewPath(i * 400 + Math.floor(Math.random() * 400));
  }

  // Every 0.7-1.4s, start another path (slightly more frequent)
  const interval = setInterval(() => {
    if (!running) return;
    startNewPath(Math.floor(Math.random() * 400));
  }, 700 + Math.random() * 700);

  // Animation loop for sequential steps
  const stepInterval = setInterval(() => {
    setActivePaths(paths =>
      paths
        .map(path => {
          const elapsed = Date.now() - path.startedAt;
          if (elapsed > path.duration) return null; // remove finished
          // For sequential agent hops, sometimes advance the step
          let step = path.step;
          if (Math.random() < 0.25 && step < (path.targets.length - 1)) {
            step++;
          }
          return { ...path, step };
        })
        .filter(Boolean) as DynamicPath[]
    );
  }, 80);

  return () => {
    running = false;
    clearInterval(interval);
    clearInterval(stepInterval);
  };
}, []);

  // Choose background colors based on theme
  const bgColor = resolvedTheme === 'dark' ? '#191a24' : '#fff';
  // Map node ids to positions
  const nodeMap = useMemo(
    () => Object.fromEntries(NODES.map(n => [n.id, n.position as [number, number, number]])),
    []
  );
  // Responsive canvas height
  const [canvasHeight, setCanvasHeight] = React.useState(600);
  React.useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 640) {
        setCanvasHeight(260); // mobile
      } else if (window.innerWidth <= 900) {
        setCanvasHeight(400); // tablet
      } else {
        setCanvasHeight(600); // desktop
      }
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      style={{
        width: '100%',
        height: canvasHeight,
        background: bgColor,
        position: 'relative',
      }}
      className="responsive-3d-canvas-container"
    >
      <Canvas camera={{ position: [0, 12, 60], fov: 48 }} shadows style={{ width: '100%', height: canvasHeight }} >
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
          nodes={NODES.filter(n => n.type === 'user')}
          color={NODE_TYPES.user.color}
          label="Users"
          resolvedTheme={resolvedTheme || 'light'}
        />
        <GroupArea
          nodes={NODES.filter(n => n.type === 'agent')}
          color={NODE_TYPES.agent.color}
          label="Agents"
          resolvedTheme={resolvedTheme || 'light'}
        />
        <GroupArea
          nodes={NODES.filter(n => n.type === 'tool')}
          color={NODE_TYPES.tool.color}
          label="Tools"
          resolvedTheme={resolvedTheme || 'light'}
        />
        {/* Edges: Render after group areas so they appear above bubbles */}
        {/* Only show dynamic edges, styled as LightningEdge and CommunicationEdge overlays */}
        {activePaths.map((path, pathIdx) => (
  <React.Fragment key={`dyn-path-${path.startedAt}-${path.user}-${path.agent}`}> 
    {/* User to agent edge */}
    <LightningEdge from={nodeMap[path.user]} to={nodeMap[path.agent]} />
    <CommunicationEdge from={nodeMap[path.user]} to={nodeMap[path.agent]} />
    {/* Agent to targets edges, sequential up to path.step */}
    {path.targets.slice(0, path.step + 1).map((target, i) => (
      <React.Fragment key={`dyn-edge-${pathIdx}-${i}`}>
        {Math.random() < 0.5 && (
          <LightningEdge from={nodeMap[path.agent]} to={nodeMap[target.id]} />
        )}
        <CommunicationEdge from={nodeMap[path.agent]} to={nodeMap[target.id]} />
      </React.Fragment>
    ))}
    {/* Secondary agent to tool edges */}
    {path.secondaryAgentToolTargets && path.secondaryAgentToolTargets.length > 0 &&
      path.secondaryAgentToolTargets.map((entry, i) => (
        entry.tools.map((toolId, j) => (
          <React.Fragment key={`sec-agent-tool-${pathIdx}-${i}-${j}`}>
            {Math.random() < 0.5 && (
              <LightningEdge from={nodeMap[entry.agent]} to={nodeMap[toolId]} />
            )}
            <CommunicationEdge from={nodeMap[entry.agent]} to={nodeMap[toolId]} />
          </React.Fragment>
        ))
      ))
    }
  </React.Fragment>
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