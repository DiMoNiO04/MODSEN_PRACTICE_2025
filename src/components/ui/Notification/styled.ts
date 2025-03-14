import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
  0% {
    transform: translateX(200%);
  }
  100% {
    transform: translateX(0);
  }
`;

const shake = keyframes`
  0%, 100% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-10px);
  }
  50% {
    transform: translateX(10px);
  }
  75% {
    transform: translateX(-10px);
  }
`;

const slideOut = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(200%);
  }
`;

const Block = styled.div<{ $isSuccess: boolean }>`
  position: fixed;
  bottom: var(--top-xl);
  right: var(--right-xl);
  padding: var(--padding-m) var(--padding-l);
  border-radius: var(--radius-m);
  width: 240px;
  background: ${({ $isSuccess }) => ($isSuccess ? 'var(--color-green)' : 'var(--color-red)')};
  display: flex;
  align-items: center;
  column-gap: 12px;
  animation:
    ${slideIn} 0.5s ease-out,
    ${shake} 0.5s ease 1s,
    ${slideOut} 0.5s ease 4s;
`;

const ImageIcon = styled.img`
  width: var(--width-m);
  height: var(--height-m);
`;

const Text = styled.div<{ $isSuccess: boolean }>`
  font-size: var(--font-size-m);
  line-height: var(--line-height-m);
  font-weight: var(--font-weight-bold);
  color: ${({ $isSuccess }) => ($isSuccess ? 'var(--color-green-dark)' : 'var(--color-red-dark)')};
`;

export { Block, ImageIcon, Text };
