/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 public/models/santa.glb -o src/components/Santa.jsx -r public
*/

import { useAnimations, useGLTF } from "@react-three/drei";
import React, { useEffect, useRef } from "react";

export function Santa(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/santa.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions["Run"].play();
  }, []);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]}>
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh
            castShadow
            receiveShadow
            name="mesh_char_135"
            geometry={nodes.mesh_char_135.geometry}
            material={materials._100_SaintClaus}
            skeleton={nodes.mesh_char_135.skeleton}
            morphTargetDictionary={nodes.mesh_char_135.morphTargetDictionary}
            morphTargetInfluences={nodes.mesh_char_135.morphTargetInfluences}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/santa.glb");
