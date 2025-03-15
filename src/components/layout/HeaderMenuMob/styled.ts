import styled from 'styled-components';

const Block = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 32px;
  height: calc(100vh - var(--height-header));
  background-color: var(--color-light);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;

  transition:
    transform 0.3s ease-in-out,
    opacity 0.3s ease-in-out;
  transform: ${({ $isOpen }) => ($isOpen ? 'translateX(0)' : 'translateX(100%)')};
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
`;

export { Block };
