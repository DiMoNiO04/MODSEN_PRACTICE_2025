import styled from 'styled-components';

const Button = styled.button<{ hasBorder: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: ${({ hasBorder }) => (hasBorder ? '1px solid #CBD5E1' : 'none')};
  padding: ${({ hasBorder }) => (hasBorder ? '8px' : 'none')};
  border-radius: 50%;
  cursor: pointer;
  transition: background 0.2s ease;

  & > svg {
    transition: filter 0.2s ease;
  }

  @media (any-hover: hover) {
    &:hover {
      background: ${({ hasBorder }) => (hasBorder ? '#cbd5e1' : 'none')};

      & > svg {
        filter: ${({ hasBorder }) => (hasBorder ? 'invert(0)' : 'invert(0.5)')};
      }
    }
  }
`;

export { Button };
