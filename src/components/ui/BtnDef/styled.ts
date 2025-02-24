import styled from 'styled-components';

const Button = styled.button<{ $isInvert?: boolean }>`
  padding: 10px;
  font-size: 20px;
  line-height: 24px;
  font-weight: 600;
  background-color: ${({ $isInvert }) => ($isInvert ? 'white' : '#f59e0b')};
  color: ${({ $isInvert }) => ($isInvert ? 'red' : 'white')};
  border: ${({ $isInvert }) => ($isInvert ? '2px solid red' : '2px solid #f59e0b')};
  border-radius: 8px;
  cursor: pointer;
  transition:
    background-color 0.2s ease,
    color 0.2s ease;

  @media (any-hover: hover) {
    &:hover {
      background-color: ${({ $isInvert }) => ($isInvert ? 'red' : 'transparent')};
      color: ${({ $isInvert }) => ($isInvert ? 'white' : '#f59e0b')};
    }
  }
`;

export { Button };
