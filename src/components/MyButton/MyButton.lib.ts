export const getButtonStyles = (disabled: boolean, colors: { backgroundColor?: string, color?: string, hoverColor?: string, activeColor?: string }) => {
    const { backgroundColor, color, hoverColor, activeColor } = colors;
    return {
      backgroundColor: disabled ? "#6c757d" : backgroundColor || "#007BFF",
      color: disabled ? "#ccc" : color || "#fff",
      hoverColor: disabled ? "#6c757d" : hoverColor || "#0056b3",
      activeColor: disabled ? "#6c757d" : activeColor || "#004494",
    };
  };
  