import React, { ReactNode, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { CameraControls, Sky, Stars, Text } from "@react-three/drei";
import * as THREE from "three";
import { GeorgeW } from "./assets/George";
import { MeshPortalMaterial } from "@react-three/drei";
import { Painting } from "./components/Painting";

interface FrameProps {
  id: string;
  name: string;
  bg: string;
  width: number;
  height: number;
  children: ReactNode;
}

const Frame: React.FC<FrameProps> = ({ id, name, bg, width, height, children, ...props }) => {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame(() => {
    if (meshRef.current) {
      // Add any animation or logic here
    }
  });

  return (
    <group {...props}>
      <Text anchorY="top" anchorX="left" fontSize={0.25} lineHeight={0.8} position={[0.25, -1, 0.1]} material-toneMapped={false}>
        {name}
      </Text>
      <Text anchorY="top" anchorX="left" fontSize={0.25} lineHeight={0.8} position={[0.25, -0.75, 0.1]} material-toneMapped={false}>{id}</Text>
      <mesh name={id} ref={meshRef}>
        <planeGeometry args={[width, height]} />
        <MeshPortalMaterial>{children}</MeshPortalMaterial>
        <directionalLight position={[0, -2, 0]} />
        <ambientLight position={[0, -2, 0]} />
      </mesh>
      <mesh name={id} position={[0, 0, -0.001]}>
        <planeGeometry args={[width + 0.25, height + 0.25]} />
        <meshBasicMaterial color="white" />
      </mesh>
    </group>
  );
};

const App: React.FC = () => {
  return (
    <div className="h-full overflow-hidden relative">
      <div className="absolute grid place-items-center h-full w-full">
        {/* Your other UI components */}
      </div>
      <Canvas gl={{ localClippingEnabled: true }} className="absolute" camera={{ fov: 40, position: [0, 0, 10] }}>
        <Frame id={"01"} name={"Blake"} bg="#000000" width={2} height={3}>
          <GeorgeW position={[0, -0.5, 0]} />
          <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
        </Frame>
        <GeorgeW clip position={[0, -.5, 0]} />
        <Painting />



        <directionalLight position={[0, 10, 10]} />
        <ambientLight />
        <axesHelper position={[-2.5, -2.5, 0]} />
        <CameraControls />
      </Canvas>
    </div>
  );
};

export default App;

