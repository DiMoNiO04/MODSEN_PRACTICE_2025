import { BtnMenuItem } from '@/components/ui';
import { UITexts } from '@/constants';
import { useBodyScrollBlock } from '@/hooks';
import { closeMenuMob } from '@/store/menuMob/actions';
import { openModaColumnAdd } from '@/store/modalColumnAdd/actions';
import { openModalTaskAdd } from '@/store/modalTaskAdd/actions';
import { useAppDispatch, useAppSelector } from '@/store/store';

import { Block } from './styled';

export const HeaderMenuMob = () => {
  const { isOpen } = useAppSelector((state) => state.menuMob);
  const dispatch = useAppDispatch();

  const handleCloseMenuMob = () => dispatch(closeMenuMob());
  const openColumnModalAdd = () => dispatch(openModaColumnAdd());
  const openTaskModalAdd = () => dispatch(openModalTaskAdd({ isFromHeader: true, columnId: '' }));

  const openColumnModal = () => {
    openColumnModalAdd();
    handleCloseMenuMob();
  };

  const openTaskModal = () => {
    openTaskModalAdd();
    handleCloseMenuMob();
  };

  useBodyScrollBlock(isOpen);

  return (
    <Block $isOpen={isOpen}>
      <BtnMenuItem onClick={openColumnModal} text={UITexts.COLUMN.ADD_NEW} />
      <BtnMenuItem onClick={openTaskModal} text={UITexts.TASK.ADD_NEW} />
    </Block>
  );
};
