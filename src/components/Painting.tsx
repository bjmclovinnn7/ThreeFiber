import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

type GLTFResult = GLTF & {
  nodes: {
    mesh_main_0: THREE.Mesh;
    mesh_main_0_1: THREE.Mesh;
    mesh_main_0_2: THREE.Mesh;
  };
  materials: {
    main: THREE.MeshBasicMaterial;
  };
};

export function Painting(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("public/painting.glb") as GLTFResult;
  const paintRef = useRef<THREE.Group>(null!)

  useFrame(() => {
    if (paintRef.current) {
      paintRef.current.position.x -= 0.00075
    }
  })
  return (
    <group {...props} dispose={null} ref={paintRef} scale={2} position={[8, -2.75, -1.5]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_main_0.geometry}
        material={materials.main}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_main_0_1.geometry}
        material={materials.main}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_main_0_2.geometry}
        material={materials.main}
      />
    </group>
  );
}

useGLTF.preload("public/painting.glb");

