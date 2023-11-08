"use client";
import {
  Popover as ArkPopover,
  PopoverContent,
  PopoverPositioner,
  PopoverProps,
  PopoverTrigger,
} from "@ark-ui/react";

import type { ReactNode } from "react";

type Placement =
  | "top"
  | "top-start"
  | "top-end"
  | "bottom"
  | "bottom-start"
  | "bottom-end"
  | "left"
  | "left-start"
  | "left-end"
  | "right"
  | "right-start"
  | "right-end";

interface Props extends PopoverProps {
  trigger: ReactNode;
  children: ReactNode;
  mt?: number;
  w?: number;
  placement?: Placement;
}

/**
 * Core Popover component.
 */
const Popover = ({
  trigger,
  children,
  mt = 3,
  w = 12,
  placement = "bottom-start",
  ...rest
}: Props) => {
  return (
    <ArkPopover
      {...rest}
      positioning={{
        placement: placement,
      }}
    >
      <PopoverTrigger>{trigger}</PopoverTrigger>
      <PopoverPositioner className="z-50">
        <PopoverContent
          style={{ marginTop: `${mt}rem`, width: `${w}rem` }}
          className="rounded-md border bg-white p-1 dark:border-zinc-800 dark:bg-zinc-900"
        >
          {children}
        </PopoverContent>
      </PopoverPositioner>
    </ArkPopover>
  );
};

export default Popover;
