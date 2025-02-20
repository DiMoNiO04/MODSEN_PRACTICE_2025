import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { BtnRound } from '@/components/ui';
import { IChildrenProps } from '@/utils';

const ModalOverlay = styled.div<{ isVisible: boolean }>`
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
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
  transition:
    opacity 0.2s ease-out,
    backdrop-filter 0.2s ease-out,
    visibility 0.2s;
`;

const ModalContent = styled.div<{ isVisible: boolean }>`
  background: white;
  padding: 32px 16px;
  border-radius: 12px;
  flex-shrink: 0;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
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

interface IModalProps extends IChildrenProps {
  onClose: () => void;
}

export const ModalContainer = ({ onClose, children }: IModalProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 200);
  };

  return (
    <ModalOverlay isVisible={isVisible} onClick={handleClose}>
      <ModalContent isVisible={isVisible} onClick={(e) => e.stopPropagation()}>
        <BtnCloseBlock>
          <BtnRound type="close" size={28} handle={handleClose} />
        </BtnCloseBlock>
        {children}
      </ModalContent>
    </ModalOverlay>
  );
};
