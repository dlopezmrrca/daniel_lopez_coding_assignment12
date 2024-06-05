import styled from "styled-components";
import { MyButtonProps } from "./MyButton.types";

const StyledButton = styled.button<MyButtonProps>`
  background-color: ${({ backgroundColor, disabled }) => (disabled ? "#6c757d" : backgroundColor || "#007BFF")};
  color: ${({ color, disabled }) => (disabled ? "#ccc" : color || "#fff")};
  padding: 12px 24px;
  border: none;
  border-radius: 5px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: ${({ hoverColor, disabled }) => (disabled ? "#6c757d" : hoverColor || "#0056b3")};
    transform: ${({ disabled }) => (disabled ? "none" : "scale(1.05)")};
  }

  &:active {
    background-color: ${({ activeColor, disabled }) => (disabled ? "#6c757d" : activeColor || "#004494")};
    transform: scale(1);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 4px ${({ disabled }) => (disabled ? "transparent" : "rgba(0, 123, 255, 0.5)")};
  }

  &:disabled {
    background-color: #6c757d;
    color: #ccc;
    cursor: not-allowed;
    transform: none;
  }
`;

const MyButton = ({
  disabled = false,
  label = "Default Text",
  backgroundColor,
  color,
  hoverColor,
  activeColor,
  ...props
}: MyButtonProps) => {
  return (
    <StyledButton
      disabled={disabled}
      backgroundColor={backgroundColor}
      color={color}
      hoverColor={hoverColor}
      activeColor={activeColor}
      {...props}
    >
      {label}
    </StyledButton>
  );
};

export default MyButton;
