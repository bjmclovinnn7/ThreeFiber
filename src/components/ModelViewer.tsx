import { Suspense } from "react"
import GlftModel from "../utils/gltf.tsx"

interface modelPathProps {
  modelPath: string
  scale: number
  position: [
    x: number,
    y: number,
    z: number
  ]
}

//const FallBack = () => {
//  return (
//    <div className="grid place-items-center h-screen w-full">
//      <text className="text-4xl text-red-600">Sorry, this image could not load.</text>
//    </div>
//  )
//}

const ModelViewer = ({ modelPath, scale = 10, position = [0, 0, 0] }: modelPathProps) => {
  return (
    <Suspense fallback={null}>
      <GlftModel modelPath={modelPath} scale={scale} position={position} />
    </Suspense>

  )
}

export default ModelViewer
