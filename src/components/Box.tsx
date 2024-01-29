import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { useAnimationContext } from "../utils/AnimationContext";

function sinusoidalFunction(x: number) {
  const amplitude = 1;
  const frequency = 1;
  const phaseShift = 1;

  return amplitude * Math.sin(frequency * x + phaseShift);
}

const Box = () => {
  const { boxAnimation } = useAnimationContext();
  const boxRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (boxAnimation && boxRef.current) {
      boxRef.current.position.y = sinusoidalFunction(state.clock.getElapsedTime());
    }
  });

  return (
    <mesh ref={boxRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={'#7393B3'} />
    </mesh>
  );
};

export default Box;
