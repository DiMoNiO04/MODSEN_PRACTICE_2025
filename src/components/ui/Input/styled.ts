import styled from 'styled-components';

const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const LabelText = styled.p`
  font-size: 14px;
  font-weight: 700;
`;

const RequiredText = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: #f59e0b;
`;

const InputInp = styled.input`
  padding: 8px;
  font-size: 16px;
  border: 1px solid #f59e0b;
  border-radius: 4px;

  &:focus {
    border-color: #4f46e5;
    outline: none;
  }
`;

export { InputInp, Label, LabelText, RequiredText };
