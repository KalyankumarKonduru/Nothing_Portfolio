"use client";

import React, { useRef, useState, useMemo, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useTexture, Decal, Html } from "@react-three/drei";
import * as THREE from "three";

export type PhysicsState = { pos: THREE.Vector3, vel: THREE.Vector2 };

export interface TechBallProps {
  id: number;
  name: string;
  iconUrl: string;
  physicsArr: React.MutableRefObject<PhysicsState[]>;
  color?: string;
}

export default function TechBall({ id, name, iconUrl, physicsArr, color = "#ffffff" }: TechBallProps) {
  const groupRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.Mesh>(null);
  const { viewport } = useThree();
  const [hovered, setHover] = useState(false);

  // Spring/Lerp targets
  const targetScale = hovered ? 1.2 : 1;
  const currentScale = useRef(1);

  // Load the texture for the decal. We use a generic fallback if mapping fails.
  const [texture] = useTexture([iconUrl]);

  // Create a glassy/metallic material
  const materialProps = useMemo(() => ({
    color: '#1a1a1a',
    metalness: 0.8,
    roughness: 0.3,
    envMapIntensity: 1.5,
    clearcoat: 1,
    clearcoatRoughness: 0.3,
    emissive: new THREE.Color(color),
    emissiveIntensity: hovered ? 0.3 : 0.05,
    transparent: true,
    opacity: 0.9,
  }), [hovered, color]);

  // Floating physics and rotation
  useFrame((state, delta) => {
    if (!groupRef.current || !meshRef.current || !physicsArr.current) return;

    const myState = physicsArr.current[id];
    if (!myState) return;

    // Ball radius is exactly 0.1x (shrunk down from 0.6x and 1.0x previously)
    const ballRadius = 0.4;
    const boundaryX = viewport.width / 2;
    // The top of the screen has the marquee, so lower the top boundary.
    const boundaryTop = (viewport.height / 2) - 1.5;
    const boundaryBottom = -(viewport.height / 2);

    // --- DRAG / FRICTION ---
    // Gradually return velocity toward a normal cruising speed (~2.0)
    const currentSpeed = Math.sqrt(myState.vel.x * myState.vel.x + myState.vel.y * myState.vel.y);
    const targetSpeed = 2.0;
    if (currentSpeed > targetSpeed) {
      myState.vel.x *= 0.95;
      myState.vel.y *= 0.95;
    } else if (currentSpeed < targetSpeed - 0.5) {
      myState.vel.x *= 1.05;
      myState.vel.y *= 1.05;
    }

    // Apply velocity step
    myState.pos.x += myState.vel.x * delta;
    myState.pos.y += myState.vel.y * delta;

    // --- CURSOR COLLISION PHYSICS ---
    // state.pointer holds normalized device coordinates (-1 to +1)
    // Convert them to exact viewport space units to match the balls
    const mouseX = (state.pointer.x * viewport.width) / 2;
    const mouseY = (state.pointer.y * viewport.height) / 2;

    // Distance between ball center and mouse
    const dx = myState.pos.x - mouseX;
    const dy = myState.pos.y - mouseY;
    const distanceCursor = Math.sqrt(dx * dx + dy * dy);

    // If the mouse touches the edge of the ball (distance < radius + some padding)
    const repelRadius = ballRadius + 0.5;
    if (distanceCursor < repelRadius && distanceCursor > 0.01) {
      // Normalize the repel vector
      const nx = dx / distanceCursor;
      const ny = dy / distanceCursor;

      // Calculate how deep the penetration is
      const overlap = repelRadius - distanceCursor;

      // Push ball directly away from cursor immediately (snap out of collision)
      myState.pos.x += nx * overlap;
      myState.pos.y += ny * overlap;

      // Apply an instantaneous velocity bump away from the mouse
      const bumpForce = 8;
      myState.vel.x = nx * bumpForce;
      myState.vel.y = ny * bumpForce;
    }

    // --- BALL-TO-BALL ELASTIC COLLISIONS ---
    // We only check against balls with higher IDs to avoid resolving the same bounce twice
    for (let j = id + 1; j < physicsArr.current.length; j++) {
      const other = physicsArr.current[j];
      if (!other) continue;

      const bdx = myState.pos.x - other.pos.x;
      const bdy = myState.pos.y - other.pos.y;
      const bDist = Math.sqrt(bdx * bdx + bdy * bdy);
      const minDist = ballRadius * 2; // 0.1 + 0.1 = 0.2

      // If balls intersect
      if (bDist < minDist && bDist > 0.001) {
        // Resolve penetration immediately so they don't clip
        const overlap = minDist - bDist;
        const nx = bdx / bDist;
        const ny = bdy / bDist;

        // Push both balls equally apart
        const pushX = (nx * overlap) / 2;
        const pushY = (ny * overlap) / 2;

        myState.pos.x += pushX;
        myState.pos.y += pushY;
        other.pos.x -= pushX;
        other.pos.y -= pushY;

        // Elastic velocity bounce setup
        const dvx = myState.vel.x - other.vel.x;
        const dvy = myState.vel.y - other.vel.y;

        // Dot product of velocity difference and normal
        const dot = dvx * nx + dvy * ny;

        // If moving towards each other, exchange velocity
        if (dot < 0) {
          myState.vel.x -= dot * nx;
          myState.vel.y -= dot * ny;
          other.vel.x += dot * nx;
          other.vel.y += dot * ny;
        }
      }
    }

    // --- WALL COLLISIONS ---
    if (myState.pos.x + ballRadius > boundaryX) {
      myState.pos.x = boundaryX - ballRadius;
      myState.vel.x = -Math.abs(myState.vel.x);
    } else if (myState.pos.x - ballRadius < -boundaryX) {
      myState.pos.x = -boundaryX + ballRadius;
      myState.vel.x = Math.abs(myState.vel.x);
    }

    if (myState.pos.y + ballRadius > boundaryTop) {
      // Bounce down
      myState.pos.y = boundaryTop - ballRadius;
      myState.vel.y = -Math.abs(myState.vel.y);
    } else if (myState.pos.y - ballRadius < boundaryBottom) {
      // Bounce up
      myState.pos.y = boundaryBottom + ballRadius;
      myState.vel.y = Math.abs(myState.vel.y);
    }

    // Assign position
    groupRef.current.position.copy(myState.pos);

    // Continuous Rotation for the BALL (Outer Mesh)
    meshRef.current.rotation.y += delta * 0.3;
    meshRef.current.rotation.x += delta * 0.3;

    // Lerp scale for snappy but smooth hover (using pointer distance rather than DOM hover)
    const isHovered = distanceCursor < repelRadius + 0.5;
    const targetScale = isHovered ? 1.2 : 1;
    currentScale.current = THREE.MathUtils.lerp(currentScale.current, targetScale, 0.3);
    groupRef.current.scale.setScalar(currentScale.current);
  });

  return (
    <group ref={groupRef} position={new THREE.Vector3(0, 0, 0)}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[0.4, 64, 64]} />
        <meshPhysicalMaterial {...materialProps} />
      </mesh>

      {/* Engraved Logo - Rendered OUTSIDE the rotating mesh so it always faces forward */}
      {texture && (
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[0.405, 32, 32]} />
          <meshBasicMaterial transparent opacity={0} depthWrite={false} color="#000" />
          <Decal
            position={[0, 0, 0.405]} // Place exactly on front surface
            rotation={[0, 0, 0]} // Fixed rotation facing +Z (Camera)
            scale={0.45} // Scaled down to fit the smaller 0.1 sphere
            map={texture}
            map-anisotropy={16}
          >
            <meshPhysicalMaterial
              map={texture}
              transparent
              depthTest
              polygonOffset
              polygonOffsetFactor={-10}
              metalness={0.6}
              roughness={0.4}
              clearcoat={1}
            />
          </Decal>
        </mesh>
      )}

      {/* Hover Label */}
      <Html
        position={[0, -1.8, 0]}
        center
        style={{
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.4s ease",
          pointerEvents: "none",
        }}
      >
        <div style={{
          fontFamily: "monospace",
          fontSize: "14px",
          color: "white",
          background: "rgba(0,0,0,0.6)",
          padding: "4px 8px",
          borderRadius: "4px",
          backdropFilter: "blur(4px)",
          border: "1px solid rgba(255,255,255,0.4)",
          textTransform: "uppercase",
          letterSpacing: "1px",
          whiteSpace: "nowrap"
        }}>
          {name}
        </div>
      </Html>
    </group>
  );
}
