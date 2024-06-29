import styled from "styled-components";
import { MyLinkProps } from "./MyLink.types";

const StyledLink = styled.a<MyLinkProps>`
  color: ${({ color }) => color || "#007BFF"};
  text-decoration: none;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  &:hover {
    color: ${({ hoverColor, disabled }) => (disabled ? "#6c757d" : hoverColor || "#0056b3")};
    text-decoration: ${({ disabled }) => (disabled ? "none" : "underline")};
  }
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
      tabIndex={disabled ? -1 : 0}
      {...props}
      data-testid="MyLink"
    >
      {children}
    </StyledLink>
  );
};

export default MyLink;
