import { useEffect, useState } from 'react';

import { BtnRound } from '@/components/ui';
import { useBodyScrollBlock } from '@/hooks';
import { IChildrenProps } from '@/utils/interfaces';

import { BtnCloseBlock, ModalContent, ModalOverlay } from './styled';

interface IModalProps extends IChildrenProps {
  onClose: () => void;
}

export const ModalContainer = ({ onClose, children }: IModalProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useBodyScrollBlock(isVisible);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const closeModalWithAnimation = () => {
    setIsVisible(false);
    setTimeout(onClose, 200);
  };

  const stopPropagation = (e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation();

  return (
    <ModalOverlay $isVisible={isVisible} onClick={closeModalWithAnimation}>
      <ModalContent $isVisible={isVisible} onClick={stopPropagation}>
        <BtnCloseBlock>
          <BtnRound type="close" handle={closeModalWithAnimation} />
        </BtnCloseBlock>
        {children}
      </ModalContent>
    </ModalOverlay>
  );
};
