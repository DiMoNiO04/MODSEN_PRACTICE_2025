import styled from 'styled-components';

const Button = styled.button<{ $isInvert?: boolean }>`
  padding: 10px;
  font-size: 20px;
  line-height: 24px;
  font-weight: 600;
  background-color: ${({ $isInvert }) => ($isInvert ? '#FFFFFF' : '#F59E0B')};
  color: ${({ $isInvert }) => ($isInvert ? '#FF0000' : '#FFFFFF')};
  border: ${({ $isInvert }) => ($isInvert ? '2px solid #FF0000' : '2px solid #F59E0B')};
  border-radius: 8px;
  cursor: pointer;
  transition:
    background-color 0.2s ease,
    color 0.2s ease;

  @media (any-hover: hover) {
    &:hover {
      background-color: ${({ $isInvert }) => ($isInvert ? '#FF0000' : 'transparent')};
      color: ${({ $isInvert }) => ($isInvert ? '#FFFFFF' : '#F59E0B')};
    }
  }
`;

export { Button };
