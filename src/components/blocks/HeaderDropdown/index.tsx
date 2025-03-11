import { forwardRef } from 'react';

import { BtnMenuItem, Dropdown } from '@/components/ui';
import { UITexts } from '@/constants';
import { toggleModaColumnAdd } from '@/store/modalColumnAdd/actions';
import { toggleModalTaskAdd } from '@/store/modalTaskAdd/actions';
import { useAppDispatch } from '@/store/store';

export const HeaderDropdown = forwardRef<HTMLDivElement>((_, ref) => {
  const dispatch = useAppDispatch();
  const toggleColumnModalAdd = () => dispatch(toggleModaColumnAdd());
  const toggleTaskModalAdd = () => dispatch(toggleModalTaskAdd());

  return (
    <Dropdown ref={ref}>
      <BtnMenuItem onClick={toggleColumnModalAdd} text={UITexts.COLUMN.ADD_NEW} />
      <BtnMenuItem onClick={toggleTaskModalAdd} text={UITexts.TASK.ADD_NEW} />
    </Dropdown>
  );
});
