import styled from 'styled-components';

const SelectInp = styled.select`
  padding: 8px;
  font-size: 16px;
  border: 1px solid #f59e0b;
  border-radius: 4px;
  background: white;
  cursor: pointer;

  &:focus {
    border-color: #4f46e5;
    outline: none;
  }
`;

export { SelectInp };
