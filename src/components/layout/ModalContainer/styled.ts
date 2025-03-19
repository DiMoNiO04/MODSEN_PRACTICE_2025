import styled from 'styled-components';

const ModalOverlay = styled.div<{ $isVisible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--padding-xl);
  width: 100%;
  height: 100%;
  background-color: var(--color-black);
  backdrop-filter: blur(var(--blur));
  z-index: var(--index-xl);
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  visibility: ${({ $isVisible }) => ($isVisible ? 'visible' : 'hidden')};
  transition:
    opacity 0.2s ease-out,
    backdrop-filter 0.2s ease-out,
    visibility 0.2s;
`;

const ModalContent = styled.div<{ $isVisible: boolean }>`
  background: var(--color-white);
  padding: var(--padding-xxl) var(--padding-l);
  border-radius: var(--radius-m);
  flex-shrink: 0;
  width: 100%;
  max-width: var(--max-width-modal);
  box-shadow: var(----shadow);
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transition:
    opacity 0.2s ease-out,
    transform 0.2s ease-out;
  position: relative;
`;

const BtnCloseBlock = styled.div`
  position: absolute;
  top: var(--top-m);
  right: var(--right-m);
`;

export { BtnCloseBlock, ModalContent, ModalOverlay };
