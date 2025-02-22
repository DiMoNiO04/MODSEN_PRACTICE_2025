import styled from 'styled-components';

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  line-heigth: 24px;
  font-weight: 600;
  background-color: #f59e0b;
  color: white;
  border: 2px solid #f59e0b;
  border-radius: 8px;
  cursor: pointer;
  transition:
    background-color 0.2s ease,
    color 0.2s ease;

  &:hover {
    background-color: transparent;
    color: #f59e0b;
  }
`;

export { Button };
