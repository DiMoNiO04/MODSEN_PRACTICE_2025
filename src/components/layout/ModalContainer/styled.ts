import styled from 'styled-components';

const ModalOverlay = styled.div<{ $isVisible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 100%;
  height: 100%;
  background-color: rgba(34, 34, 35, 0.9);
  backdrop-filter: blur(12px);
  z-index: 100;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  visibility: ${({ $isVisible }) => ($isVisible ? 'visible' : 'hidden')};
  transition:
    opacity 0.2s ease-out,
    backdrop-filter 0.2s ease-out,
    visibility 0.2s;
`;

const ModalContent = styled.div<{ $isVisible: boolean }>`
  background: white;
  padding: 32px 16px;
  border-radius: 12px;
  flex-shrink: 0;
  width: 100%;
  max-width: 500px;
  box-shadow: 0px 2px 4px -2px #1717170f;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transition:
    opacity 0.2s ease-out,
    transform 0.2s ease-out;
  position: relative;
`;

const BtnCloseBlock = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
`;

export { BtnCloseBlock, ModalContent, ModalOverlay };
