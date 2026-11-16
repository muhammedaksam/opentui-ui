/** @jsxImportSource @opentui/react */

import type { BoxOptions } from "@opentui/core";
import type { ReactNode } from "react";
import { useTheme } from "./use-theme";

export interface SkeletonProps extends BoxOptions {
  children?: ReactNode;
}

/** Consumer-owned React Skeleton recipe composed from ordinary OpenTUI elements. */
export function Skeleton({
  backgroundColor,
  children,
  shouldFill = true,
  ...props
}: SkeletonProps) {
  const tokens = useTheme();

  return (
    <box
      backgroundColor={backgroundColor ?? tokens.colors.surface}
      shouldFill={shouldFill}
      {...props}
    >
      {children}
    </box>
  );
}
