import styled from "styled-components";
import { MyTextProps } from "./MyText.types";

const StyledText = styled.span<MyTextProps>`
  font-size: ${({ size }) => {
    switch (size) {
      case "small":
        return "12px";
      case "medium":
        return "16px";
      case "large":
        return "20px";
      default:
        return "16px";
    }
  }};
  font-weight: ${({ bold }) => (bold ? "bold" : "normal")};
  text-decoration: ${({ underline }) => (underline ? "underline" : "none")};
  color: ${({ disabled }) => (disabled ? "#ccc" : "#000")};
  background-color: ${({ backgroundColor }) => backgroundColor || "transparent"};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "auto")};
  display: ${({ visible }) => (visible ? "inline" : "none")};
`;

const MyText = ({
  size = "medium",
  bold = false,
  underline = false,
  disabled = false,
  backgroundColor,
  visible = true,
  children,
  ...props
}: MyTextProps) => {
  return (
    <StyledText
      size={size}
      bold={bold}
      underline={underline}
      disabled={disabled}
      backgroundColor={backgroundColor}
      visible={visible}
      {...props}
    >
      {children}
    </StyledText>
  );
};

export default MyText;
