import { forwardRef } from 'react';

import { BtnMenuItem, Dropdown } from '@/components/ui';
import { UITexts } from '@/constants';
import { openModaColumnAdd } from '@/store/modalColumnAdd/actions';
import { openModalTaskAdd } from '@/store/modalTaskAdd/actions';
import { useAppDispatch } from '@/store/store';

export const HeaderDropdown = forwardRef<HTMLDivElement>((_, ref) => {
  const dispatch = useAppDispatch();
  const openColumnModalAdd = () => dispatch(openModaColumnAdd());
  const openTaskModalAdd = () => dispatch(openModalTaskAdd({ isFromHeader: true }));

  return (
    <Dropdown ref={ref}>
      <BtnMenuItem onClick={openColumnModalAdd} text={UITexts.COLUMN.ADD_NEW} />
      <BtnMenuItem onClick={openTaskModalAdd} text={UITexts.TASK.ADD_NEW} />
    </Dropdown>
  );
});
