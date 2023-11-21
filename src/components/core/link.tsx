"use client";

import NextLink from "next/link";

import type { LinkProps } from "next/link";
import type { ReactNode } from "react";

export interface Props extends LinkProps {
  /** Disable state of link. */
  isDisabled?: boolean;
  /** External link. */
  isExternal?: boolean;
  className?: string;
  children?: ReactNode;
}

/**
 * Link (application-internal or external).
 */
const Link = ({
  isDisabled,
  isExternal,
  className,
  children,
  ...rest
}: Props) =>
  // forward children if disabled
  // NB: fragment wrap is intended to prevent return type error
  isDisabled ? (
    <>{children}</>
  ) : (
    <NextLink
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer noopener" : undefined}
      className={className}
      {...rest}
    >
      {children}
    </NextLink>
  );

export default Link;
