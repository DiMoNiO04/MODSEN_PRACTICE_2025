import styled from 'styled-components';

const Button = styled.button<{ $isInvert?: boolean }>`
  padding: var(--padding-m);
  font-size: var(--font-size-l);
  line-height: var(--font-height-l);
  font-weight: 600;
  background-color: ${({ $isInvert }) => ($isInvert ? 'var(--color-white)' : 'var(--color-orange)')};
  color: ${({ $isInvert }) => ($isInvert ? 'var(--color-red)' : 'var(--color-white)')};
  border: ${({ $isInvert }) => ($isInvert ? '2px solid var(--color-red)' : '2px solid var(--color-orange)')};
  border-radius: 8px;
  cursor: pointer;
  transition:
    background-color 0.2s ease,
    color 0.2s ease;

  @media (any-hover: hover) {
    &:hover {
      background-color: ${({ $isInvert }) => ($isInvert ? 'var(--color-red)' : 'transparent')};
      color: ${({ $isInvert }) => ($isInvert ? 'var(--color-white)' : 'var(--color-orange)')};
    }
  }
`;

export { Button };
