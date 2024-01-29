
import { forwardRef } from "react"
import { VariantProps, cva } from "class-variance-authority"
import { cn } from "../utils/cn.tsx"

const buttonVariants = cva("flex justify-center items-center", {
  variants: {
    variant: {
      default: "bg-white border-black rounded-full",
      primary: "bg-white text-black rounded-sm",
      secondary: "bg-black text-white border rounded-sm",
      splash: "bg-[#4F4F4F] text-white rounded-sm",
      wrong: "bg-red-500 text-white",
      right: "bg-correct-1 text-white",
    },
    size: {
      default: "h-10 w-[20%] text-sm md:text-base lg:text-lg gap-2",
      md: "p-6",
      lg: "p-10",
      none: "",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
})


interface ButtonProps extends React.ComponentPropsWithRef<"button">, VariantProps<typeof buttonVariants> { }

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ className, size, variant, ...props }, buttonRef) => {
  return <button ref={buttonRef} className={cn(buttonVariants({ variant, size, className }))} {...props} />
})

export { Button, buttonVariants }
