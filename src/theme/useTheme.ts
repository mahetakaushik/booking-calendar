import { colors } from "./colors";

interface UseThemeReturn {
  colors: typeof colors;
  getCSSVariable: (variableName: string) => string;
  getPrimaryColor: (variant?: keyof typeof colors.primary) => string;
  getTextColor: (variant?: keyof typeof colors.text) => string;
  getBackgroundColor: (
    variant?: keyof typeof colors.background
  ) => string | typeof colors.background.gradient;
  getStateColor: (variant?: keyof typeof colors.state) => string;
}

export const useTheme = (): UseThemeReturn => {
  return {
    colors,
    getCSSVariable: (variableName: string): string => {
      return `var(--${variableName})`;
    },
    // Helper functions for common color operations
    getPrimaryColor: (variant: keyof typeof colors.primary = "main"): string =>
      colors.primary[variant],
    getTextColor: (variant: keyof typeof colors.text = "primary"): string =>
      colors.text[variant],
    getBackgroundColor: (
      variant: keyof typeof colors.background = "primary"
    ): string | typeof colors.background.gradient => colors.background[variant],
    getStateColor: (variant: keyof typeof colors.state = "success"): string =>
      colors.state[variant],
  };
};

export default useTheme;
