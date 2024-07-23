"use client";

import * as TabsPrimitive from "@radix-ui/react-tabs";
import { forwardRef } from "react";

import { cn } from "lib/utils";

import type { TabsContentProps, TabsProps } from "@radix-ui/react-tabs";
import type {
  ComponentPropsWithoutRef,
  ElementType,
  ForwardRefExoticComponent,
  ReactNode,
} from "react";

type PrimitiveComponent = ComponentPropsWithoutRef<ElementType>;

export interface TabRecord {
  value: string;
  trigger: ReactNode;
  disabled?: boolean;
  content: ReactNode;
}

interface Props extends TabsProps {
  tabs: TabRecord[];
  contentProps?: Omit<TabsContentProps, "value">;
}

const createPrimitiveComponent = (
  primitiveComponent: keyof typeof TabsPrimitive
): ForwardRefExoticComponent<PrimitiveComponent> => {
  const Component = TabsPrimitive[primitiveComponent] as ElementType;

  const ForwardedComponent = forwardRef(
    ({ className, ...props }: PrimitiveComponent, ref) => (
      <Component ref={ref} className={cn(className)} {...props} />
    )
  );

  return ForwardedComponent;
};

const Tabs = ({
  tabs,
  contentProps,
  className,
  ...rest
}: Props): JSX.Element => {
  const PrimitiveTabs = createPrimitiveComponent("Root");
  const PrimitiveTabsList = createPrimitiveComponent("List");
  const PrimitiveTabTrigger = createPrimitiveComponent("Trigger");
  const PrimitiveTabContent = createPrimitiveComponent("Content");

  return (
    <PrimitiveTabs {...rest} className={cn("mt-12 w-full", className)}>
      <div className="border-b border-neutral-300">
        <PrimitiveTabsList className="text-fg-muted -mb-[2px] flex gap-px">
          {tabs.map(({ value, trigger, disabled }) => (
            <PrimitiveTabTrigger
              key={value}
              value={value}
              disabled={disabled}
              className="data-[state=active]:text-black data-[state=active]:after:absolute data-[state=active]:after:bottom-0 data-[state=active]:after:left-1/2 data-[state=active]:after:transform data-[state=active]:after:-translate-x-1/2 data-[state=active]:after:w-full data-[state=active]:after:h-[3px] data-[state=active]:after:bg-accent data-[state=active]:after:rounded-tl-[1.5px] data-[state=active]:after:rounded-tr-[1.5px] data-[state=active]:after:rounded-bl-[1.5px] data-[state=active]:after:rounded-br-[1.5px] data-[state=inactive]:hover:text-black data-[state=inactive]:hover:after:absolute data-[state=inactive]:hover:after:bottom-0 data-[state=inactive]:hover:after:left-1/2 data-[state=inactive]:hover:after:transform data-[state=inactive]:hover:after:-translate-x-1/2 data-[state=inactive]:hover:after:w-full data-[state=inactive]:hover:after:h-[3px] data-[state=inactive]:hover:after:bg-neutral-300 data-[state=inactive]:hover:after:rounded-tl-[1.5px] data-[state=inactive]:hover:after:rounded-tr-[1.5px] data-[state=inactive]:hover:after:rounded-bl-[1.5px] data-[state=inactive]:hover:after:rounded-br-[1.5px] relative cursor-pointer py-3 px-10 text-sm disabled:pointer-events-none disabled:opacity-50"
            >
              {trigger}
            </PrimitiveTabTrigger>
          ))}
        </PrimitiveTabsList>
      </div>
      {tabs.map(({ value, content }) => (
        <PrimitiveTabContent
          key={value}
          value={value}
          className="mt-2"
          {...contentProps}
        >
          {content}
        </PrimitiveTabContent>
      ))}
    </PrimitiveTabs>
  );
};

export default Tabs;
