"use client"

import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"
import { cn } from "@/lib/utils"

function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
  const baseClasses =
    orientation === "vertical"
      ? "w-px h-full bg-gray-300"
      : "h-px w-full bg-gray-300"

  return (
    <SeparatorPrimitive.Root
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      className={cn(baseClasses, className)}
      {...props}
    />
  )
}

export { Separator }
