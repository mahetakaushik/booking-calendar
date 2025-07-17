export const colors = {
  // Primary Brand Colors
  primary: {
    main: "#be83bf",
    dark: "#3d2f4b",
    light: "#a3b8f0",
    variant: "#c471f5",
    accent: "#cc8ecd",
  },

  // Background Colors
  background: {
    primary: "#f5f5f5",
    secondary: "#f8f9fa",
    tertiary: "#ededed",
    dark: "#282c34",
    modal: "rgba(0, 0, 0, 0.5)",
    overlay: "rgba(0, 0, 0, 0.3)",
    card: "#ffffff",
    disabled: "#ebe4eb",
    gradient: {
      primary: "linear-gradient(to right, #be83bf, #a3b8f0)",
      secondary: "linear-gradient(135deg, #007bff 0%, #0056b3 100%)",
      tertiary: "linear-gradient(135deg, #0056b3 0%, #004085 100%)",
      success: "linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%)",
    },
  },

  // Text Colors
  text: {
    primary: "#3d2f4b",
    secondary: "#333",
    tertiary: "#555",
    quaternary: "#666",
    muted: "#6c757d",
    light: "#adb5bd",
    white: "#ffffff",
    disabled: "#3d2f4b80",
    contrast: "#3f2a42",
  },

  // State Colors
  state: {
    success: "#4CAF50",
    successLight: "#538d60",
    error: "#dc3545",
    errorLight: "#ff6b6b",
    warning: "#ce9901",
    warningBackground: "#fff3cd",
    info: "#007bff",
    infoLight: "#6366f1",
  },

  // Interactive Colors
  interactive: {
    hover: "#c8b7cb",
    active: "#5a6268",
    disabled: "#d5d5d5",
    border: "#dee2e6",
    borderLight: "#e9ecef",
    borderAccent: "#c3e6cb",
  },

  // Opacity Variants
  opacity: {
    white: {
      10: "rgba(255, 255, 255, 0.1)",
      15: "rgba(255, 255, 255, 0.15)",
      20: "rgba(255, 255, 255, 0.2)",
      70: "rgba(255, 255, 255, 0.7)",
      80: "rgba(255, 255, 255, 0.8)",
      90: "rgba(255, 255, 255, 0.9)",
    },
    primary: {
      10: "rgba(196, 113, 245, 0.1)",
      30: "rgba(196, 113, 245, 0.3)",
    },
    error: {
      10: "rgba(220, 53, 69, 0.1)",
      30: "rgba(220, 53, 69, 0.3)",
      60: "rgba(220, 53, 69, 0.6)",
      80: "rgba(220, 53, 69, 0.8)",
    },
    black: {
      15: "rgba(0, 0, 0, 0.15)",
      30: "rgba(0, 0, 0, 0.3)",
      50: "rgba(0, 0, 0, 0.5)",
    },
  },

  // Shadow Colors
  shadow: {
    light: "0 4px 12px rgba(0,0,0,0.3)",
    medium: "0 20px 60px rgba(0, 0, 0, 0.15)",
    heavy: "0 20px 60px rgba(0, 0, 0, 0.3)",
  },
} as const;

// Export individual color groups for easier imports
export const {
  primary,
  background,
  text,
  state,
  interactive,
  opacity,
  shadow,
} = colors;

// Helper function to get color with opacity
export const withOpacity = (color: string, opacity: number): string => {
  // Convert hex to rgba
  if (color.startsWith("#")) {
    const hex = color.replace("#", "");
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  }
  return color;
};

export default colors;
