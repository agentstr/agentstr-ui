'use client';
import React, { useRef, useMemo, useState, useEffect } from 'react';
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

function LightningEdge({ from, to, theme = 'light' }: { from: [number, number, number]; to: [number, number, number]; theme?: string }) {
  const ref = useRef<Line2 | LineSegments2 | null>(null);
  useFrame(({ clock }) => {
    if (ref.current) {
      const mat = ref.current.material;
      if (hasDashOffset(mat)) {
        mat.dashOffset = -clock.getElapsedTime() * 2;
      }
    }
  });
  // Enhance visibility in light theme
  const color = theme === 'light' ? '#ffb300' : '#ffe066';
  const lineWidth = theme === 'light' ? 5 : 3.5;
  const opacity = theme === 'light' ? 1.0 : 0.98;
  return (
    <>
      {/* Glow effect for light theme */}
      {theme === 'light' && (
        <Line
          points={[from, to]}
          color="#fffbe0"
          lineWidth={10}
          dashed
          dashSize={0.4}
          gapSize={0.2}
          opacity={0.45}
          transparent
        />
      )}
      <Line
        ref={ref}
        points={[from, to]}
        color={color}
        lineWidth={lineWidth}
        dashed
        dashSize={0.4}
        gapSize={0.2}
        opacity={opacity}
        transparent
      />
    </>
  );
}

// Communication edge (solid cyan, slightly offset)
function CommunicationEdge({ from, to, theme }: { from: [number, number, number]; to: [number, number, number]; theme: string }) {
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
  const color = theme === 'light' ? '#1976d2' : '#00e0ff';
  return (
    <Line
      ref={ref}
      points={[fromOffset, toOffset]}
      color={color}
      lineWidth={3.5}
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
          const xOffset = label === 'Users' ? 0.7 : label === 'Agents' ? 0.6 : label === 'Tools' ? 0.3 : 0.4;
          const yOffset = label === 'Users' ? 1.7 : label === 'Agents' ? 1.5 : label === 'Tools' ? 1.4 : 1.4;
          return [
            center[0] - sphereRadius * xOffset,
            center[1] + sphereRadius * yOffset,
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
            background: resolvedTheme === 'dark'
              ? 'rgba(10, 10, 10, 0.5)'
              : 'rgba(255, 255, 255, 0.5)',
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
            // opacity removed, handled by background alpha above
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
    `;
    document.head.appendChild(style);
  }
}

export default function DecentralizedAINetwork3D() {
  const { resolvedTheme } = useTheme();
  // New dynamic edge animation state
  type ActiveEdge = {
    id: string;
    type: 'lightning' | 'nostr';
    from: number;
    to: number;
    expiresAt: number;
  };
  const [activeEdges, setActiveEdges] = React.useState<ActiveEdge[]>([]);

  useEffect(() => {
    let running = true;

    function spawnUserAgentAndAgentToolEdges() {
    // 1. User→Agent edges (both types)
    const user = USER_IDS[Math.floor(Math.random() * USER_IDS.length)];
    const agent = AGENT_IDS[Math.floor(Math.random() * AGENT_IDS.length)];
    const now = Date.now();
    const userAgentEdgeId = `${now}-user-${user}-agent-${agent}`;
    // Communication (nostr) edge first, temp long lifetime
    const userAgentCommEdge = {
      id: userAgentEdgeId + '-nostr',
      type: 'nostr' as const,
      from: user,
      to: agent,
      expiresAt: now + 99999999 // will be set to expire later
    };
    setActiveEdges(edges => [...edges, userAgentCommEdge]);

    // ... (rest of the edge spawning logic, including agent->tool, etc.) ...

    // After all downstream edges are spawned, schedule the lightning zap with the REAL comm edge duration
    // This is done inside the setTimeout where the user->agent comm edge's expiresAt is updated:
    // setActiveEdges(edges => edges.map(e => ... ))
    // Add the following block right after updating the comm edge's expiresAt:
    //
    //   const commEdgeFinalExpiry = finalExpiry + 100;
    //   const commEdgeLifetime = commEdgeFinalExpiry - now;
    //   const lightningDelay = Math.random() * (commEdgeLifetime - 200);
    //   setTimeout(() => {
    //     setActiveEdges(edges => [
    //       ...edges,
    //       {
    //         id: userAgentEdgeId + '-lightning',
    //         type: 'lightning' as const,
    //         from: user,
    //         to: agent,
    //         expiresAt: Date.now() + 200
    //       }
    //     ]);
    //   }, lightningDelay);


    // 25% chance: agent connects to another agent, which then connects to tools
    let secondaryAgent: number | null = null;
    let secondaryAgentToolExpiries: number[] = [];
    let secondaryAgentEdgeExpiry = 0;
    if (Math.random() < 0.25 && AGENT_IDS.length > 1) {
      // Pick a secondary agent (not the same as the first)
      const possibleSecondary = AGENT_IDS.filter(a => a !== agent);
      secondaryAgent = possibleSecondary[Math.floor(Math.random() * possibleSecondary.length)];
      if (typeof secondaryAgent === 'number') {
        const agentAgentEdgeId = `${now}-agent-${agent}-agent-${secondaryAgent}`;
        // Communication edge first
        const agentAgentCommEdge = {
          id: agentAgentEdgeId + '-nostr',
          type: 'nostr' as const,
          from: agent,
          to: secondaryAgent,
          expiresAt: now + 99999999 // will be set below
        };
        setActiveEdges(edges => [...edges, agentAgentCommEdge]);
        // Lightning edge will be scheduled after comm edge's TRUE expiry is set (see below)

        // After a short delay, spawn secondary agent->tool edges
        const secondaryAgentToToolDelay = 200 + Math.random() * 800;
        setTimeout(() => {
          const toolCount2 = 1 + Math.floor(Math.random() * 4);
          const shuffledTools2 = [...TOOL_IDS].sort(() => Math.random() - 0.5).slice(0, toolCount2);
          let spawned2 = 0;
          let maxExpires2 = 0;
          shuffledTools2.forEach((tool2, idx2) => {
            const randomDelay2 = Math.random() * 250;
            const agentVal = secondaryAgent;
            const toolVal = tool2;
            setTimeout(() => {
              if (typeof agentVal !== 'number' || typeof toolVal !== 'number') return;
              const edgeId2 = `${now}-agent-${agentVal}-tool-${toolVal}`;
              const commDuration2 = 500 + Math.random() * 1000;
              const commExpiresAt2 = Date.now() + commDuration2;
              if (commExpiresAt2 > maxExpires2) maxExpires2 = commExpiresAt2;
              // Communication edge first
              const commEdge2: ActiveEdge = {
                id: edgeId2 + '-nostr',
                type: 'nostr',
                from: agentVal,
                to: toolVal,
                expiresAt: commExpiresAt2
              };
              setActiveEdges(edges => [...edges, commEdge2]);
              // Lightning edge spawns randomly during comm edge, always lasts 0.2s
              const zapDuration2 = 200;
              const commEdgeLifetime2 = commExpiresAt2 - Date.now();
              if (commEdgeLifetime2 > zapDuration2) {
                const lightningDelay2 = Math.random() * Math.max(0, commEdgeLifetime2 - zapDuration2 - 100);
                setTimeout(() => {
                  setActiveEdges(edges => [
                    ...edges,
                    {
                      id: edgeId2 + '-lightning',
                      type: 'lightning',
                      from: agentVal,
                      to: toolVal,
                      expiresAt: Date.now() + zapDuration2
                    }
                  ]);
                }, lightningDelay2);
              }
              spawned2++;
              if (spawned2 === shuffledTools2.length) {
                // Set agent->agent edge expiry just after last tool edge
                setActiveEdges(edges =>
                  edges.map(e =>
                    (e.from === agent && e.to === secondaryAgent)
                      ? { ...e, expiresAt: maxExpires2 + 100 }
                      : e
                  )
                );
                const commEdgeFinalExpiry = maxExpires2 + 100;
                const commEdgeLifetime = commEdgeFinalExpiry - now;
                const agentVal2 = agent;
                const secondaryVal2 = secondaryAgent;
                if (commEdgeLifetime > zapDuration2 && typeof secondaryVal2 === 'number') {
                  const lightningDelay = Math.random() * Math.max(0, commEdgeLifetime - zapDuration2 - 100);
                  setTimeout(() => {
                    setActiveEdges(edges => [
                      ...edges,
                      {
                        id: `${now}-agent-${agentVal2}-agent-${secondaryVal2}-lightning`,
                        type: 'lightning' as const,
                        from: agentVal2,
                        to: secondaryVal2,
                        expiresAt: Date.now() + zapDuration2
                      }
                    ]);
                  }, lightningDelay);
                }
                secondaryAgentEdgeExpiry = maxExpires2 + 100;
                secondaryAgentToolExpiries.push(maxExpires2 + 100);
              }
            }, randomDelay2);
          });
        }, secondaryAgentToToolDelay);
      }
    }

    // 2. After 0.2–1s, spawn agent→tool edges
    const agentToToolDelay = 200 + Math.random() * 800;
    setTimeout(() => {
      const toolCount = 1 + Math.floor(Math.random() * 4);
      const shuffledTools = [...TOOL_IDS].sort(() => Math.random() - 0.5).slice(0, toolCount);
      let spawned = 0;
      let maxExpiresAt = 0;
      shuffledTools.forEach((tool, idx) => {
        const randomDelay = Math.random() * 250;
        setTimeout(() => {
          const edgeId = `${now}-agent-${agent}-tool-${tool}`;
          const commDuration = 300 + Math.random() * 1200; // 0.5–1.5s
          const commExpiresAt = Date.now() + commDuration;
          if (commExpiresAt > maxExpiresAt) maxExpiresAt = commExpiresAt;
          // Communication edge first
          const commEdge: ActiveEdge = {
            id: edgeId + '-nostr',
            type: 'nostr',
            from: agent,
            to: tool,
            expiresAt: commExpiresAt
          };
          setActiveEdges(edges => [...edges, commEdge]);
          // Lightning edge spawns randomly during comm edge, always lasts 0.2s
          const zapDuration = 200;
          const commEdgeLifetime = commExpiresAt - Date.now();
          if (commEdgeLifetime > zapDuration) {
            const lightningDelay = Math.random() * Math.max(0, commEdgeLifetime - zapDuration - 100);
            setTimeout(() => {
              setActiveEdges(edges => [
                ...edges,
                {
                  id: edgeId + '-lightning',
                  type: 'lightning',
                  from: agent,
                  to: tool,
                  expiresAt: Date.now() + zapDuration
                }
              ]);
            }, lightningDelay);
          }
          spawned++;
          if (spawned === shuffledTools.length) {
            setTimeout(() => {
              let allExpiries = [maxExpiresAt];
              if (secondaryAgentToolExpiries.length > 0) {
                allExpiries = allExpiries.concat(secondaryAgentToolExpiries);
              }
              const finalExpiry = Math.max(...allExpiries);
              setActiveEdges(edges =>
                edges.map(e =>
                  (e.from === user && e.to === agent)
                    ? { ...e, expiresAt: finalExpiry + 100 }
                    : e
                )
              );
              // Schedule the lightning zap at a random time during the comm edge's true lifetime
              const zapDuration = 200;
              const commEdgeFinalExpiry = finalExpiry + 100;
              const commEdgeLifetime = commEdgeFinalExpiry - now;
              if (commEdgeLifetime > zapDuration) {
                const lightningDelay = Math.random() * Math.max(0, commEdgeLifetime - zapDuration - 100);
                setTimeout(() => {
                  setActiveEdges(edges => [
                    ...edges,
                    {
                      id: userAgentEdgeId + '-lightning',
                      type: 'lightning' as const,
                      from: user,
                      to: agent,
                      expiresAt: Date.now() + zapDuration
                    }
                  ]);
                }, lightningDelay);
              }
            }, 50);
          }
        }, randomDelay);
      });
    }, agentToToolDelay);
  }

  // Spawn a new user→agent→tools animation every 1–2 seconds
  function loop() {
    if (!running) return;
    spawnUserAgentAndAgentToolEdges();
    const nextDelay = 1000 + Math.random() * 1000;
    setTimeout(loop, nextDelay);
  }
  loop();

  // Clean up expired edges every 80ms
  const cleanupInterval = setInterval(() => {
    setActiveEdges(edges => edges.filter(e => e.expiresAt > Date.now()));
  }, 80);

  return () => {
    running = false;
    clearInterval(cleanupInterval);
  };
}, []);

  // Choose background colors based on theme
  const bgColor = resolvedTheme === 'dark' ? '#0a0a0a' : '#ffffff';
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

  // Prevent legend from rendering until client-side theme is resolved
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

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
        {activeEdges.map((edge) => {
          const fromPos = NODES.find(n => n.id === edge.from)?.position;
          const toPos = NODES.find(n => n.id === edge.to)?.position;
          if (!fromPos || !toPos) return null;
          if (edge.type === 'lightning') {
            return <LightningEdge key={edge.id} from={fromPos} to={toPos} theme={resolvedTheme || 'light'} />;
          } else {
            return <CommunicationEdge key={edge.id} from={fromPos} to={toPos} theme={resolvedTheme || 'light'} />;
          }
        })}
        {/* Nodes: Always render last so they appear on top of edges */}
        {NODES.map((node) => (
          <NodeSphere
            key={node.id}
            position={node.position as [number, number, number]}
            color={NODE_TYPES[node.type as keyof typeof NODE_TYPES].color}
          />
        ))}
      </Canvas>
      {/* Responsive, theme-aware legend INSIDE the chart */}
      {mounted && (
        <div
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 10,
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            pointerEvents: 'none', // let mouse events pass through except legend itself
            zIndex: 10,
          }}
        >
          <div
            className="network-legend"
            style={{
              display: 'flex',
              gap: 24,
              padding: '8px 16px',
              borderRadius: 8,
              boxShadow: resolvedTheme === 'dark'
                ? '0 2px 16px 0 rgba(0,0,0,0.23)'
                : '0 2px 12px 0 rgba(180,180,180,0.10)',
              background: resolvedTheme === 'dark' ? 'rgba(10, 10, 10, 0.5)' : 'rgba(255, 255, 255, 0.5)',
              color: resolvedTheme === 'dark' ? '#e9e9e9' : '#222',
              fontSize: 14,
              fontWeight: 700,
              alignItems: 'center',
              flexWrap: 'wrap',
              maxWidth: 440,
              width: 'fit-content',
              border: resolvedTheme === 'dark' ? '1.5px solid #222' : '1.5px solid #e2e2e2',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 3 }}>
              <svg width="32" height="8" style={{ marginRight: 8 }}>
                <line x1="2" y1="4" x2="30" y2="4" stroke={resolvedTheme === 'light' ? '#ffb300' : '#ffe066'} strokeWidth="5" strokeDasharray="6,4" />
                {resolvedTheme === 'light' && (
                  <line x1="2" y1="4" x2="30" y2="4" stroke="#fffbe0" strokeWidth="10" strokeDasharray="6,4" opacity="0.45" />
                )}
              </svg>
              <span>Lightning</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <svg width="32" height="8" style={{ marginRight: 8 }}>
                <line x1="2" y1="4" x2="30" y2="4" stroke={resolvedTheme === 'light' ? '#1976d2' : '#00e0ff'} strokeWidth="3" strokeDasharray="6,4" />
              </svg>
              <span>Nostr</span>
            </div>
          </div>
          {/* Responsive CSS for legend */}
          <style>{`
            .network-legend {
              transition: background 0.3s, color 0.3s;
            }
            @media (max-width: 600px) {
              .network-legend {
                font-size: 12px;
                gap: 12px;
                padding: 6px 6px;
                max-width: 98vw;
              }
            }
          `}</style>
        </div>
      )}
    </div>
  );
}