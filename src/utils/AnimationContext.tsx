import { createContext, useContext, useState, ReactNode } from "react";

interface AnimationContextType {
  boxAnimation: boolean;
  changeBoxAnimation: () => void;
}

const AnimationContext = createContext<AnimationContextType | undefined>(undefined);

export function useAnimationContext() {
  const context = useContext(AnimationContext);
  if (context === undefined) {
    throw new Error("useAnimationContext must be used within AnimationProvider");
  }
  return context;
}

export function AnimationProvider({ children }: { children: ReactNode }) {
  const [boxAnimation, setBoxAnimation] = useState(false);

  const changeBoxAnimation = () => {
    setBoxAnimation(!boxAnimation);
    console.log(boxAnimation)
  };

  const contextValue: AnimationContextType = {
    boxAnimation,
    changeBoxAnimation,
  };

  return <AnimationContext.Provider value={contextValue}>{children}</AnimationContext.Provider>;
}

