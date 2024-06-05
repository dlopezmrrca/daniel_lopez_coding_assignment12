import styled from "styled-components";
import { MyLinkProps } from "./MyLink.types";

const StyledLink = styled.a<MyLinkProps>`
  color: ${({ color }) => color || "#007BFF"};
  text-decoration: none;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};

  &:hover {
    color: ${({ hoverColor, disabled }) => (disabled ? "#6c757d" : hoverColor || "#0056b3")};
  }

  ${({ disabled }) =>
    disabled &&
    `
    color: #6c757d;
    pointer-events: none;
    cursor: not-allowed;
    text-decoration: none;
  `}
`;

const MyLink = ({
  disabled = false,
  color,
  hoverColor,
  children,
  ...props
}: MyLinkProps) => {
  return (
    <StyledLink
      color={color}
      hoverColor={hoverColor}
      disabled={disabled}
      {...props}
      tabIndex={disabled ? -1 : 0}
    >
      {children}
    </StyledLink>
  );
};

export default MyLink;
