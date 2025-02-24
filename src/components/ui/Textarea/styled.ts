import styled from 'styled-components';

const TextAreaField = styled.textarea`
  padding: 8px;
  font-size: 16px;
  border: 1px solid #f59e0b;
  border-radius: 4px;
  resize: none;
  overflow: hidden;

  &:focus {
    border-color: #4f46e5;
    outline: none;
  }
`;

export { TextAreaField };
