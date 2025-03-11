import { ModalTask } from '@/components/modals';
import { toggleModalTask } from '@/store/modalTask/actions';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { IChildrenProps } from '@/utils';

import { MainBlock } from './styled';

export const Main = ({ children }: IChildrenProps) => {
  const dispatch = useAppDispatch();
  const { isOpen: isOpenModalTask, cardData } = useAppSelector((state) => state.modals.modalTask);

  const handleCloseModal = () => dispatch(toggleModalTask(null));

  return (
    <MainBlock>
      {children}
      {isOpenModalTask && cardData && <ModalTask onClose={handleCloseModal} cardData={cardData} />}
    </MainBlock>
  );
};
