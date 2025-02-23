import { useState, useEffect } from 'react';
import { BtnRound } from '@/components/ui';
import { IChildrenProps, IModalCloseProps } from '@/utils';
import { BtnCloseBlock, ModalContent, ModalOverlay } from './styled';
import { useBodyScrollBlock } from '@/hooks';

export interface IModalProps extends IChildrenProps, IModalCloseProps {}

export const ModalContainer = ({ onClose, children }: IModalProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useBodyScrollBlock(isVisible);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 200);
  };

  return (
    <ModalOverlay $isVisible={isVisible} onClick={handleClose}>
      <ModalContent $isVisible={isVisible} onClick={(e) => e.stopPropagation()}>
        <BtnCloseBlock>
          <BtnRound type="close" handle={handleClose} />
        </BtnCloseBlock>
        {children}
      </ModalContent>
    </ModalOverlay>
  );
};
