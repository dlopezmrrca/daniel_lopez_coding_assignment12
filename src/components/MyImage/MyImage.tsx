import styled from 'styled-components';
import { MyImageProps } from './MyImage.types';

const StyledImage = styled.img<MyImageProps>`
  width: ${({ size }) => (size === 'large' ? '200px' : '100px')};
  height: ${({ size }) => (size === 'large' ? '200px' : '100px')};
  border-radius: ${({ round }) => (round ? '50%' : '0')};
  opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

const MyImage = ({
  src,
  alt = 'Image',
  size = 'primary',
  round = false,
  disabled = false,
  ...props
}: MyImageProps) => {
  return (
    <StyledImage
      src={src}
      alt={alt}
      size={size}
      round={round}
      disabled={disabled}
      {...props}
    />
  );
};

export default MyImage;
