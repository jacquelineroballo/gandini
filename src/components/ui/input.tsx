import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-12 w-full rounded-xl border-2 border-construction-gray-200 bg-white/90 backdrop-blur-sm px-4 py-3 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-construction-gray-400 focus-visible:outline-none focus-visible:border-construction-teal-500 focus-visible:ring-4 focus-visible:ring-construction-teal-500/20 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300 hover:border-construction-gray-300 md:text-sm",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
