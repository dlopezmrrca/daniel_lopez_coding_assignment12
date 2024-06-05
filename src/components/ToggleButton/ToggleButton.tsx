import { useState } from 'react';
import styled from 'styled-components';
import { ToggleButtonProps } from './ToggleButton.types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const StyledToggleButton = styled.button<ToggleButtonProps>`
  position: relative;
  display: flex;
  align-items: center;
  background-color: ${({ isActive, disabled }) => (isActive ? '#007BFF' : disabled ? '#6c757d' : 'transparent')};
  color: ${({ isActive, disabled }) => (isActive ? '#fff' : disabled ? '#ccc' : '#000')};
  border: 2px solid ${({ isActive }) => (isActive ? '#007BFF' : '#ccc')};
  border-radius: 20px;
  padding: 5px 15px;
  font-size: 14px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${({ isActive, disabled }) => (isActive || disabled ? '' : '#0056b3')};
    color: ${({ isActive, disabled }) => (isActive || disabled ? '' : '#fff')};
  }
`;

const MenuContainer = styled.div<{ isActive: boolean }>`
  position: absolute;
  top: calc(100% + 5px); /* Adjust the position of the menu */
  right: 0;
  background-color: #fff;
  border: 2px solid #007bff;
  border-radius: 5px;
  padding: 10px;
  display: ${({ isActive }) => (isActive ? 'block' : 'none')};
`;

const MenuLink = styled.a`
  display: block;
  padding: 5px 0;
  color: #000;
  text-decoration: none;
  transition: color 0.3s;
  &:hover {
    color: #007bff;
  }
`;

const ToggleButton: React.FC<ToggleButtonProps> = ({ isActive = false, disabled = false }) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <StyledToggleButton
      isActive={isActive}
      disabled={disabled}
      onClick={toggleMenu}
    >
      <FontAwesomeIcon icon={faBars} />
      {menuVisible && (
        <MenuContainer isActive={menuVisible}>
          <MenuLink href="#">Link 1</MenuLink>
          <MenuLink href="#">Link 2</MenuLink>
          <MenuLink href="#">Link 3</MenuLink>
        </MenuContainer>
      )}
    </StyledToggleButton>
  );
};

export default ToggleButton;
