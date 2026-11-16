import {
  type BoxOptions,
  BoxRenderable,
  type RenderContext,
} from "@opentui/core";
import { type Tokens, theme } from "./theme";

export type SkeletonOptions = BoxOptions;

class SkeletonRecipeRenderable extends BoxRenderable {
  private readonly unsubscribeTheme: () => void;

  constructor(ctx: RenderContext, options: SkeletonOptions = {}) {
    const tokens = theme.get();
    super(ctx, {
      backgroundColor: options.backgroundColor ?? tokens.colors.surface,
      shouldFill: options.shouldFill ?? true,
      ...options,
    });

    const applyStyle = (currentTokens: Readonly<Tokens>) => {
      if (options.backgroundColor === undefined) {
        this.backgroundColor = currentTokens.colors.surface;
      }
    };

    this.unsubscribeTheme = theme.subscribe(() => applyStyle(theme.get()));
  }

  override destroy(): void {
    this.unsubscribeTheme();
    super.destroy();
  }
}

/** Consumer-owned imperative Skeleton recipe composed directly from OpenTUI Box. */
export function createSkeleton(
  ctx: RenderContext,
  options: SkeletonOptions = {},
): BoxRenderable {
  return new SkeletonRecipeRenderable(ctx, options);
}
