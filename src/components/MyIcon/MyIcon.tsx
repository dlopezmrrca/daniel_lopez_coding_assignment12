import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { MyIconProps } from "./MyIcon.types";

const StyledIcon = styled(FontAwesomeIcon)<MyIconProps>`
  color: ${({ color, disabled }) => (disabled ? "#6c757d" : color || "#000")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  font-size: ${({ size }) => size || "1em"};

  &:hover {
    color: ${({ hoverColor, disabled }) => (disabled ? "#6c757d" : hoverColor || "#000")};
  }
`;

const MyIcon = ({
  color,
  hoverColor,
  size,
  disabled = false,
  ...props
}: MyIconProps) => {
  return (
    <StyledIcon
      icon={faCoffee}
      color={color}
      hoverColor={hoverColor}
      size={size}
      disabled={disabled}
      {...props}
    />
  );
};

export default MyIcon;
