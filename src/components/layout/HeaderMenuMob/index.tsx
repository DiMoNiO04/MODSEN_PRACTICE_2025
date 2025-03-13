import { BtnMenuItem } from '@/components/ui';
import { UITexts } from '@/constants';
import { useBodyScrollBlock } from '@/hooks';
import { closeMenuMob } from '@/store/menuMob/actions';
import { openModaColumnAdd } from '@/store/modalColumnAdd/actions';
import { openModalTaskAdd } from '@/store/modalTaskAdd/actions';
import { useAppDispatch, useAppSelector } from '@/store/store';

import { Block } from './styled';

export const HeaderMenuMob = () => {
  const isOpenMenuMob = useAppSelector((state) => state.menuMob.isOpen);
  const dispatch = useAppDispatch();

  const handleCloseMenuMob = () => dispatch(closeMenuMob());
  const openColumnModalAdd = () => dispatch(openModaColumnAdd());
  const openTaskModalAdd = () => dispatch(openModalTaskAdd({ isFromHeader: true }));

  const openColumnModal = () => {
    openColumnModalAdd();
    handleCloseMenuMob();
  };

  const openTaskModal = () => {
    openTaskModalAdd();
    handleCloseMenuMob();
  };

  useBodyScrollBlock(isOpenMenuMob);

  return (
    <Block $isOpen={isOpenMenuMob}>
      <BtnMenuItem onClick={openColumnModal} text={UITexts.COLUMN.ADD_NEW} />
      <BtnMenuItem onClick={openTaskModal} text={UITexts.TASK.ADD_NEW} />
    </Block>
  );
};
