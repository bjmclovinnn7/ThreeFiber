import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib"
import * as THREE from "three"

type GLTFResult = GLTF & {
  nodes: {
    Object_2: THREE.Mesh;
    Object_3: THREE.Mesh;
    Object_4: THREE.Mesh;
    Object_5: THREE.Mesh;
  };
  materials: {
    material: THREE.MeshStandardMaterial;
    ["ml.001"]: THREE.MeshStandardMaterial;
  };
};


type GeorgeWProps = JSX.IntrinsicElements["group"] & {
  clip?: boolean;
  position?: number[];
};

export function GeorgeW({ clip, position, ...props }: GeorgeWProps) {
  const { nodes, materials } = useGLTF("public/george_washington_bust.glb") as GLTFResult;

  const zPlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
  const yPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 1);

  return (
    <group {...props} dispose={null} scale={0.002} position={position}>
      <group rotation={[-Math.PI / 2, 0, 3.5]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials["ml.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials["ml.001"]}
        />
        <meshBasicMaterial
          side={THREE.DoubleSide}
          clippingPlanes={clip ? [zPlane, yPlane] : []} // Use an array for clippingPlanes
        />
      </group>
    </group>
  );
}

useGLTF.preload("public/george_washington_bust.glb");
