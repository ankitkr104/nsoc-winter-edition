import * as React from "react"
import { cn } from "@/lib/utils"

interface SectionHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  subheading?: React.ReactNode
}

const SectionHeading = React.forwardRef<HTMLHeadingElement, SectionHeadingProps>(
  ({ className, subheading, children, ...props }, ref) => {
    return (
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        {subheading && (
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary glow-border">
            {subheading}
          </div>
        )}
        <h2
          ref={ref}
          className={cn(
            "font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-foreground",
            className
          )}
          {...props}
        >
          {children}
        </h2>
      </div>
    )
  }
)
SectionHeading.displayName = "SectionHeading"

export { SectionHeading }
