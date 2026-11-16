/** @jsxImportSource @opentui/solid */

import type { BoxOptions } from "@opentui/core";
import type { JSX } from "@opentui/solid";
import { splitProps } from "solid-js";
import { useTheme } from "./use-theme";

export interface SkeletonProps extends BoxOptions {
  children?: JSX.Element;
}

/** Consumer-owned Solid Skeleton recipe composed from ordinary OpenTUI elements. */
export function Skeleton(props: SkeletonProps) {
  const [local, root] = splitProps(props, [
    "backgroundColor",
    "children",
    "shouldFill",
  ]);
  const tokens = useTheme();

  return (
    <box
      backgroundColor={local.backgroundColor ?? tokens().colors.surface}
      shouldFill={local.shouldFill ?? true}
      {...root}
    >
      {local.children}
    </box>
  );
}
