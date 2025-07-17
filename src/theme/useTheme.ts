import { colors } from "./colors";

export const useTheme = () => {
  return {
    colors,
    getCSSVariable: (variableName: string) => {
      return `var(--${variableName})`;
    },
    // Helper functions for common color operations
    getPrimaryColor: (variant: keyof typeof colors.primary = "main") =>
      colors.primary[variant],
    getTextColor: (variant: keyof typeof colors.text = "primary") =>
      colors.text[variant],
    getBackgroundColor: (variant: keyof typeof colors.background = "primary") =>
      colors.background[variant],
    getStateColor: (variant: keyof typeof colors.state = "success") =>
      colors.state[variant],
  };
};

export default useTheme;
