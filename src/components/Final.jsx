/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 public/models/final.glb -o src/components/Final.jsx -r public
*/

import { useAnimations, useGLTF } from "@react-three/drei";
import React, { useEffect, useRef } from "react";
import { LoopRepeat } from "three";

export function Final(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/final.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    Object.keys(actions).forEach((key) => {
      actions[key].loop = LoopRepeat;
      actions[key].clampWhenFinished = false;
      actions[key].play();
    });
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Armature"
          position={[0.628, 2.317, -6.101]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        >
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh
            castShadow
            receiveShadow
            name="mesh_char_129001"
            geometry={nodes.mesh_char_129001.geometry}
            material={materials._096_XmasTree}
            skeleton={nodes.mesh_char_129001.skeleton}
            morphTargetDictionary={nodes.mesh_char_129001.morphTargetDictionary}
            morphTargetInfluences={nodes.mesh_char_129001.morphTargetInfluences}
          />
        </group>
        <group
          name="Armature001"
          position={[4.401, 0.772, 2.353]}
          rotation={[Math.PI / 2, 0, 0.763]}
          scale={0.01}
        >
          <primitive object={nodes.mixamorigHips_1} />
          <skinnedMesh
            castShadow
            receiveShadow
            name="mesh_char_126_1001"
            geometry={nodes.mesh_char_126_1001.geometry}
            material={materials._095_CandyCane}
            skeleton={nodes.mesh_char_126_1001.skeleton}
            morphTargetDictionary={
              nodes.mesh_char_126_1001.morphTargetDictionary
            }
            morphTargetInfluences={
              nodes.mesh_char_126_1001.morphTargetInfluences
            }
          />
        </group>
        <group
          name="Armature002"
          position={[-4.064, 0.772, 2.529]}
          rotation={[Math.PI / 2, 0, -1.126]}
          scale={0.01}
        >
          <primitive object={nodes.mixamorigHips_2} />
          <skinnedMesh
            castShadow
            receiveShadow
            name="mesh_char_135001"
            geometry={nodes.mesh_char_135001.geometry}
            material={materials._100_SaintClaus}
            skeleton={nodes.mesh_char_135001.skeleton}
            morphTargetDictionary={nodes.mesh_char_135001.morphTargetDictionary}
            morphTargetInfluences={nodes.mesh_char_135001.morphTargetInfluences}
          />
        </group>
        <group
          name="Armature003"
          position={[-1.713, 0.772, -1.109]}
          rotation={[Math.PI / 2, 0, -0.516]}
          scale={0.01}
        >
          <primitive object={nodes.mixamorigHips_3} />
          <skinnedMesh
            castShadow
            receiveShadow
            name="mesh_char_132_1001"
            geometry={nodes.mesh_char_132_1001.geometry}
            material={materials._099_Present}
            skeleton={nodes.mesh_char_132_1001.skeleton}
            morphTargetDictionary={
              nodes.mesh_char_132_1001.morphTargetDictionary
            }
            morphTargetInfluences={
              nodes.mesh_char_132_1001.morphTargetInfluences
            }
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          name="Sledge"
          geometry={nodes.Sledge.geometry}
          material={materials.Cube}
          position={[0.319, 1.539, 2.403]}
          rotation={[0, -0.452, 0]}
          scale={0.006}
        />
        <mesh
          castShadow
          receiveShadow
          name="Present"
          geometry={nodes.Present.geometry}
          material={materials["Material.001"]}
          position={[0.022, 1.675, 2.126]}
          scale={1026.752}
        />
        <mesh
          castShadow
          receiveShadow
          name="Stage"
          geometry={nodes.Stage.geometry}
          material={materials.mat4}
          position={[0.001, 7.134, -4.396]}
          rotation={[Math.PI, -0.003, Math.PI]}
          scale={16.886}
        >
          <group name="group1019421867">
            <mesh
              castShadow
              receiveShadow
              name="mesh1019421867"
              geometry={nodes.mesh1019421867.geometry}
              material={materials.mat21}
            />
            <mesh
              castShadow
              receiveShadow
              name="mesh1019421867_1"
              geometry={nodes.mesh1019421867_1.geometry}
              material={materials.mat23}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            name="group1065885900"
            geometry={nodes.group1065885900.geometry}
            material={materials.mat4}
          />
          <mesh
            castShadow
            receiveShadow
            name="group1152917930"
            geometry={nodes.group1152917930.geometry}
            material={materials.mat23}
          />
          <mesh
            castShadow
            receiveShadow
            name="group1171041578"
            geometry={nodes.group1171041578.geometry}
            material={materials.mat23}
          />
          <mesh
            castShadow
            receiveShadow
            name="group1202944587"
            geometry={nodes.group1202944587.geometry}
            material={materials.mat21}
          />
          <mesh
            castShadow
            receiveShadow
            name="group1205982878"
            geometry={nodes.group1205982878.geometry}
            material={materials.mat23}
          />
          <group name="group1217792840">
            <mesh
              castShadow
              receiveShadow
              name="mesh1217792840"
              geometry={nodes.mesh1217792840.geometry}
              material={materials.mat23}
            />
            <mesh
              castShadow
              receiveShadow
              name="mesh1217792840_1"
              geometry={nodes.mesh1217792840_1.geometry}
              material={materials.mat21}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            name="group1220310105"
            geometry={nodes.group1220310105.geometry}
            material={materials.mat23}
          />
          <group name="group1222825309">
            <mesh
              castShadow
              receiveShadow
              name="mesh1222825309"
              geometry={nodes.mesh1222825309.geometry}
              material={materials.mat21}
            />
            <mesh
              castShadow
              receiveShadow
              name="mesh1222825309_1"
              geometry={nodes.mesh1222825309_1.geometry}
              material={materials.mat23}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            name="group1230379943"
            geometry={nodes.group1230379943.geometry}
            material={materials.mat23}
          />
          <mesh
            castShadow
            receiveShadow
            name="group1232243031"
            geometry={nodes.group1232243031.geometry}
            material={materials.mat23}
          />
          <mesh
            castShadow
            receiveShadow
            name="group1258423404"
            geometry={nodes.group1258423404.geometry}
            material={materials.mat23}
          />
          <group name="group1294600578">
            <mesh
              castShadow
              receiveShadow
              name="mesh1294600578"
              geometry={nodes.mesh1294600578.geometry}
              material={materials.mat21}
            />
            <mesh
              castShadow
              receiveShadow
              name="mesh1294600578_1"
              geometry={nodes.mesh1294600578_1.geometry}
              material={materials.mat23}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            name="group1339615119"
            geometry={nodes.group1339615119.geometry}
            material={materials.mat23}
          />
          <mesh
            castShadow
            receiveShadow
            name="group1426257500"
            geometry={nodes.group1426257500.geometry}
            material={materials.mat23}
          />
          <mesh
            castShadow
            receiveShadow
            name="group1465698848"
            geometry={nodes.group1465698848.geometry}
            material={materials.mat23}
          />
          <mesh
            castShadow
            receiveShadow
            name="group1494673130"
            geometry={nodes.group1494673130.geometry}
            material={materials.mat17}
          />
          <mesh
            castShadow
            receiveShadow
            name="group1527461713"
            geometry={nodes.group1527461713.geometry}
            material={materials.mat17}
          />
          <mesh
            castShadow
            receiveShadow
            name="group1628787800"
            geometry={nodes.group1628787800.geometry}
            material={materials.mat23}
          />
          <mesh
            castShadow
            receiveShadow
            name="group1638929159"
            geometry={nodes.group1638929159.geometry}
            material={materials.mat23}
          />
          <group name="group1643390884">
            <mesh
              castShadow
              receiveShadow
              name="mesh1643390884"
              geometry={nodes.mesh1643390884.geometry}
              material={materials.mat21}
            />
            <mesh
              castShadow
              receiveShadow
              name="mesh1643390884_1"
              geometry={nodes.mesh1643390884_1.geometry}
              material={materials.mat23}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            name="group1800273911"
            geometry={nodes.group1800273911.geometry}
            material={materials.mat23}
          />
          <mesh
            castShadow
            receiveShadow
            name="group180074517"
            geometry={nodes.group180074517.geometry}
            material={materials.mat21}
          />
          <mesh
            castShadow
            receiveShadow
            name="group1834030120"
            geometry={nodes.group1834030120.geometry}
            material={materials.mat23}
          />
          <mesh
            castShadow
            receiveShadow
            name="group1849001110"
            geometry={nodes.group1849001110.geometry}
            material={materials.mat23}
          />
          <group name="group1854768055">
            <mesh
              castShadow
              receiveShadow
              name="mesh1854768055"
              geometry={nodes.mesh1854768055.geometry}
              material={materials.mat23}
            />
            <mesh
              castShadow
              receiveShadow
              name="mesh1854768055_1"
              geometry={nodes.mesh1854768055_1.geometry}
              material={materials.mat21}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            name="group1857431487"
            geometry={nodes.group1857431487.geometry}
            material={materials.mat11}
          />
          <group name="group1882116085">
            <mesh
              castShadow
              receiveShadow
              name="mesh1882116085"
              geometry={nodes.mesh1882116085.geometry}
              material={materials.mat21}
            />
            <mesh
              castShadow
              receiveShadow
              name="mesh1882116085_1"
              geometry={nodes.mesh1882116085_1.geometry}
              material={materials.mat23}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            name="group1898278143"
            geometry={nodes.group1898278143.geometry}
            material={materials.mat21}
          />
          <mesh
            castShadow
            receiveShadow
            name="group1968110075"
            geometry={nodes.group1968110075.geometry}
            material={materials.mat21}
          />
          <mesh
            castShadow
            receiveShadow
            name="group2042029480"
            geometry={nodes.group2042029480.geometry}
            material={materials.mat23}
          />
          <mesh
            castShadow
            receiveShadow
            name="group2057343033"
            geometry={nodes.group2057343033.geometry}
            material={materials.mat5}
          />
          <mesh
            castShadow
            receiveShadow
            name="group2093559352"
            geometry={nodes.group2093559352.geometry}
            material={materials.mat4}
          />
          <mesh
            castShadow
            receiveShadow
            name="group261881767"
            geometry={nodes.group261881767.geometry}
            material={materials.mat23}
          />
          <group name="group262590673">
            <mesh
              castShadow
              receiveShadow
              name="mesh262590673"
              geometry={nodes.mesh262590673.geometry}
              material={materials.mat21}
            />
            <mesh
              castShadow
              receiveShadow
              name="mesh262590673_1"
              geometry={nodes.mesh262590673_1.geometry}
              material={materials.mat23}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            name="group3021195"
            geometry={nodes.group3021195.geometry}
            material={materials.mat21}
          />
          <mesh
            castShadow
            receiveShadow
            name="group403824514"
            geometry={nodes.group403824514.geometry}
            material={materials.mat23}
          />
          <group name="group4624663">
            <mesh
              castShadow
              receiveShadow
              name="mesh4624663"
              geometry={nodes.mesh4624663.geometry}
              material={materials.mat23}
            />
            <mesh
              castShadow
              receiveShadow
              name="mesh4624663_1"
              geometry={nodes.mesh4624663_1.geometry}
              material={materials.mat21}
            />
          </group>
          <group name="group520126278">
            <mesh
              castShadow
              receiveShadow
              name="mesh520126278"
              geometry={nodes.mesh520126278.geometry}
              material={materials.mat21}
            />
            <mesh
              castShadow
              receiveShadow
              name="mesh520126278_1"
              geometry={nodes.mesh520126278_1.geometry}
              material={materials.mat23}
            />
          </group>
          <group name="group524563606">
            <mesh
              castShadow
              receiveShadow
              name="mesh524563606"
              geometry={nodes.mesh524563606.geometry}
              material={materials.mat21}
            />
            <mesh
              castShadow
              receiveShadow
              name="mesh524563606_1"
              geometry={nodes.mesh524563606_1.geometry}
              material={materials.mat23}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            name="group657821834"
            geometry={nodes.group657821834.geometry}
            material={materials.mat11}
          />
          <mesh
            castShadow
            receiveShadow
            name="group663146134"
            geometry={nodes.group663146134.geometry}
            material={materials.mat23}
          />
          <mesh
            castShadow
            receiveShadow
            name="group691084744"
            geometry={nodes.group691084744.geometry}
            material={materials.mat23}
          />
          <mesh
            castShadow
            receiveShadow
            name="group691313237"
            geometry={nodes.group691313237.geometry}
            material={materials.mat21}
          />
          <group name="group705261939">
            <mesh
              castShadow
              receiveShadow
              name="mesh705261939"
              geometry={nodes.mesh705261939.geometry}
              material={materials.mat23}
            />
            <mesh
              castShadow
              receiveShadow
              name="mesh705261939_1"
              geometry={nodes.mesh705261939_1.geometry}
              material={materials.mat21}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            name="group723620767"
            geometry={nodes.group723620767.geometry}
            material={materials.mat21}
          />
          <mesh
            castShadow
            receiveShadow
            name="group751218795"
            geometry={nodes.group751218795.geometry}
            material={materials.mat23}
          />
          <group name="group754303093">
            <mesh
              castShadow
              receiveShadow
              name="mesh754303093"
              geometry={nodes.mesh754303093.geometry}
              material={materials.mat21}
            />
            <mesh
              castShadow
              receiveShadow
              name="mesh754303093_1"
              geometry={nodes.mesh754303093_1.geometry}
              material={materials.mat23}
            />
          </group>
          <group name="group757777836">
            <mesh
              castShadow
              receiveShadow
              name="mesh757777836"
              geometry={nodes.mesh757777836.geometry}
              material={materials.mat21}
            />
            <mesh
              castShadow
              receiveShadow
              name="mesh757777836_1"
              geometry={nodes.mesh757777836_1.geometry}
              material={materials.mat23}
            />
          </group>
          <group name="group769508696">
            <mesh
              castShadow
              receiveShadow
              name="mesh769508696"
              geometry={nodes.mesh769508696.geometry}
              material={materials.mat23}
            />
            <mesh
              castShadow
              receiveShadow
              name="mesh769508696_1"
              geometry={nodes.mesh769508696_1.geometry}
              material={materials.mat21}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            name="group770885330"
            geometry={nodes.group770885330.geometry}
            material={materials.mat23}
          />
          <mesh
            castShadow
            receiveShadow
            name="group782403233"
            geometry={nodes.group782403233.geometry}
            material={materials.mat23}
          />
          <mesh
            castShadow
            receiveShadow
            name="group811626294"
            geometry={nodes.group811626294.geometry}
            material={materials.mat11}
          />
          <mesh
            castShadow
            receiveShadow
            name="group819661363"
            geometry={nodes.group819661363.geometry}
            material={materials.mat23}
          />
          <mesh
            castShadow
            receiveShadow
            name="group860584409"
            geometry={nodes.group860584409.geometry}
            material={materials.mat21}
          />
          <group name="group873065786">
            <mesh
              castShadow
              receiveShadow
              name="mesh873065786"
              geometry={nodes.mesh873065786.geometry}
              material={materials.mat21}
            />
            <mesh
              castShadow
              receiveShadow
              name="mesh873065786_1"
              geometry={nodes.mesh873065786_1.geometry}
              material={materials.mat23}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            name="group885771481"
            geometry={nodes.group885771481.geometry}
            material={materials.mat11}
          />
          <mesh
            castShadow
            receiveShadow
            name="group967650822"
            geometry={nodes.group967650822.geometry}
            material={materials.mat23}
          />
          <mesh
            castShadow
            receiveShadow
            name="group98223733"
            geometry={nodes.group98223733.geometry}
            material={materials.mat23}
          />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          name="Present001"
          geometry={nodes.Present001.geometry}
          material={materials["Material.001"]}
          position={[1.258, 1.589, 2.145]}
          rotation={[0, -0.783, 0]}
          scale={809.743}
        />
        <mesh
          castShadow
          receiveShadow
          name="Present002"
          geometry={nodes.Present002.geometry}
          material={materials["Material.001"]}
          position={[-0.881, 1.675, 1.134]}
          rotation={[0, 0.771, 0]}
          scale={603.463}
        />
        <mesh
          castShadow
          receiveShadow
          name="Present003"
          geometry={nodes.Present003.geometry}
          material={materials["Material.001"]}
          position={[0.666, 1.671, 3.024]}
          rotation={[0, -0.131, 0]}
          scale={571.78}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/final.glb");
