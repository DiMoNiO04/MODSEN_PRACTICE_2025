import styled from 'styled-components';

const InputField = styled.input`
  padding: 8px;
  font-size: 16px;
  border: 1px solid #f59e0b;
  border-radius: 4px;

  &:focus {
    border-color: #4f46e5;
    outline: none;
  }
`;

export { InputField };
