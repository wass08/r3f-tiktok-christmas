/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 public/models/snowman.glb -o src/components/Snowman.jsx -r public
*/

import { Billboard, Text, useAnimations, useGLTF } from "@react-three/drei";
import { useFrame, useGraph } from "@react-three/fiber";
import React, { useEffect, useMemo, useRef } from "react";
import { SkeletonUtils } from "three-stdlib";
import { lerp } from "three/src/math/MathUtils";
import { useGame } from "../hooks/useGame";

export function Snowman({ snowman, ...props }) {
  const group = useRef();
  const { scene, materials, animations } = useGLTF("/models/snowman.glb");
  // Skinned meshes cannot be re-used in threejs without cloning them
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene]);
  // useGraph creates two flat object collections for nodes and materials
  const { nodes } = useGraph(clone);

  const { actions } = useAnimations(animations, group);
  const nameMaterial = useRef();
  const { isSnowmanAttackable } = useGame();
  useEffect(() => {
    actions["Run"].time = Math.random() * actions["Run"].getClip().duration;
    actions["Run"].play();
  }, []);

  useFrame((_, delta) => {
    if (snowman.dead) {
      group.current.position.z = -40;
    } else {
      group.current.position.z = lerp(group.current.position.z, 0, delta * 1.2);
    }
    nameMaterial.current.opacity = lerp(
      nameMaterial.current.opacity,
      isSnowmanAttackable(snowman) ? 1 : 0,
      delta * 2
    );
  });

  return (
    <group ref={group} {...props} dispose={null}>
      {/* NAME */}
      <Billboard position-y={4}>
        <Text fontSize={0.42} font="fonts/Poppins-Bold.ttf">
          {snowman.name}
          <meshStandardMaterial
            color="red"
            emissive={"orange"}
            emissiveIntensity={2}
            toneMapped={false}
            ref={nameMaterial}
          />
        </Text>
      </Billboard>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]}>
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh
            castShadow
            receiveShadow
            name="Body_11"
            geometry={nodes.Body_11.geometry}
            material={materials._092_Chili}
            skeleton={nodes.Body_11.skeleton}
            morphTargetDictionary={nodes.Body_11.morphTargetDictionary}
            morphTargetInfluences={nodes.Body_11.morphTargetInfluences}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/snowman.glb");
