export const getLinkColor = (disabled: boolean, colors: { color?: string, hoverColor?: string, activeColor?: string }) => {
    const { color, hoverColor, activeColor } = colors;
    return {
        color: disabled ? "#ccc" : color || "#007BFF",
        hoverColor: disabled ? "#ccc" : hoverColor || "#0056b3",
        activeColor: disabled ? "#ccc" : activeColor || "#004494",
    };
}