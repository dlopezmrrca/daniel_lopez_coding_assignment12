import styled from 'styled-components';
import { MyFormProps } from './MyForm.types';

const StyledForm = styled.form<MyFormProps>`
  display: flex;
  flex-direction: column;
  width: 300px;
  gap: 10px;
`;

const StyledInput = styled.input<MyFormProps>`
  padding: 10px;
  font-size: 14px;
  border: 2px solid ${({ focused }) => (focused ? '#007BFF' : '#ccc')};
  border-radius: 5px;
  outline: none;
  &:disabled {
    background-color: #f0f0f0;
    border-color: #ddd;
    cursor: not-allowed;
  }
`;

const StyledTextArea = styled.textarea<MyFormProps>`
  padding: 10px;
  font-size: 14px;
  border: 2px solid ${({ focused }) => (focused ? '#007BFF' : '#ccc')};
  border-radius: 5px;
  outline: none;
  resize: vertical;
  &:disabled {
    background-color: #f0f0f0;
    border-color: #ddd;
    cursor: not-allowed;
  }
`;

const StyledButton = styled.button<MyFormProps>`
  padding: 10px;
  font-size: 14px;
  background-color: ${({ disabled }) => (disabled ? '#6c757d' : '#007BFF')};
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  &:hover {
    background-color: ${({ disabled }) => (disabled ? '#6c757d' : '#0056b3')};
  }
`;

const MyForm = ({ disabled = false, focused = false, ...props }: MyFormProps) => {
  return (
    <StyledForm {...props}>
      <StyledInput type="text" placeholder="Name" disabled={disabled} focused={focused} />
      <StyledInput type="email" placeholder="Email" disabled={disabled} focused={focused} />
      <StyledTextArea placeholder="Comment" disabled={disabled} focused={focused} />
      <StyledButton type="submit" disabled={disabled}>
        Submit
      </StyledButton>
    </StyledForm>
  );
};

export default MyForm;
