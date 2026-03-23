// Design Tokens derived from the "Modern Heirloom" design system (DESIGN.md)

export const colors = {
  primary: "#1B3022",
  primaryDark: "#061b0e",
  secondary: "#D4AF37",
  tertiary: "#FF0000",
  neutral: "#F9F6F0",

  // Surface hierarchy (warm ivory tones)
  background: "#fcf9f3",
  surface: "#f7f3eb",
  surfaceContainerLowest: "#ffffff",
  surfaceContainerLow: "#f7f3eb",
  surfaceContainer: "#f1ede5",
  surfaceContainerHigh: "#ebe7df",
  surfaceContainerHighest: "#e5e1d9",

  // On-colors (text/icons on surfaces)
  onPrimary: "#ffffff",
  onSecondary: "#1c1c18",
  onSurface: "#1c1c18",
  onSurfaceVariant: "#46483e",

  // Outline
  outlineVariant: "#c7c7b8",
} as const;

export const typography = {
  fontSerif: "var(--font-noto-serif)",
  fontSans: "var(--font-plus-jakarta)",
  fontMono: "var(--font-geist-mono)",

  scale: {
    "display-lg": { size: "3.5625rem", lineHeight: "4rem", weight: 400, tracking: "-0.015em" },
    "display-md": { size: "2.8125rem", lineHeight: "3.25rem", weight: 400, tracking: "-0.01em" },
    "display-sm": { size: "2.25rem", lineHeight: "2.75rem", weight: 400, tracking: "0" },
    "headline-lg": { size: "2rem", lineHeight: "2.5rem", weight: 400, tracking: "0" },
    "headline-md": { size: "1.75rem", lineHeight: "2.25rem", weight: 400, tracking: "0" },
    "headline-sm": { size: "1.5rem", lineHeight: "2rem", weight: 400, tracking: "0" },
    "title-lg": { size: "1.375rem", lineHeight: "1.75rem", weight: 500, tracking: "0" },
    "title-md": { size: "1rem", lineHeight: "1.5rem", weight: 500, tracking: "0.009em" },
    "title-sm": { size: "0.875rem", lineHeight: "1.25rem", weight: 500, tracking: "0.007em" },
    "body-lg": { size: "1rem", lineHeight: "1.5rem", weight: 400, tracking: "0.009em" },
    "body-md": { size: "0.875rem", lineHeight: "1.25rem", weight: 400, tracking: "0.016em" },
    "body-sm": { size: "0.75rem", lineHeight: "1rem", weight: 400, tracking: "0.025em" },
    "label-lg": { size: "0.875rem", lineHeight: "1.25rem", weight: 500, tracking: "0.007em" },
    "label-md": { size: "0.75rem", lineHeight: "1rem", weight: 500, tracking: "0.031em" },
    "label-sm": { size: "0.6875rem", lineHeight: "1rem", weight: 500, tracking: "0.031em" },
  },
} as const;

export const spacing = {
  0: "0",
  1: "0.25rem",
  2: "0.5rem",
  3: "0.75rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  8: "2rem",
  10: "2.5rem",
  12: "3rem",
  14: "3.5rem",
  16: "5.5rem",
  20: "7rem",
} as const;

export const radius = {
  none: "0",
  sm: "0.125rem",
  default: "0.25rem",
  md: "0.375rem",
  lg: "0.5rem",
} as const;

export const shadows = {
  ambient: "0 8px 40px rgba(28, 28, 24, 0.04)",
  ambientMd: "0 12px 40px rgba(28, 28, 24, 0.06)",
} as const;

export type DesignColor = keyof typeof colors;
export type TypographyScale = keyof typeof typography.scale;
