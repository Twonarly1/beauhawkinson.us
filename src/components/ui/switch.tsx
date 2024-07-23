"use client";

import * as SwitchPrimitives from "@radix-ui/react-switch";
import { forwardRef } from "react";

import { cn } from "lib/utils";

import type { ComponentPropsWithoutRef, ElementRef } from "react";

const Switch = forwardRef<
  ElementRef<typeof SwitchPrimitives.Root>,
  ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "data-[state=checked]:bg-accent data-[state=unchecked]:bg-purple-500 data-[state=unchecked]:bg-neutral-300 peer inline-flex h-4 w-8 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50",
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0 pointer-events-none block h-3 w-3 rounded-full bg-white shadow-lg ring-0 transition-transform"
      )}
    />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export default Switch;
