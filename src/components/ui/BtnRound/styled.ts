import styled from 'styled-components';

const Button = styled.button<{ $hasBorder: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: ${({ $hasBorder }) => ($hasBorder ? '1px solid var(--color-dark)' : 'none')};
  padding: ${({ $hasBorder }) => ($hasBorder ? 'var(--padding-s)' : '0')};
  border-radius: var(--radius-full);
  cursor: pointer;
  transition: background 0.2s ease;

  & > svg {
    transition: filter 0.2s ease;
  }

  @media (any-hover: hover) {
    &:hover {
      background: ${({ $hasBorder }) => ($hasBorder ? 'var(--color-gray-cool)' : 'none')};

      & > svg {
        filter: ${({ $hasBorder }) => ($hasBorder ? 'invert(0)' : 'invert(0.5)')};
      }
    }
  }
`;

export { Button };
