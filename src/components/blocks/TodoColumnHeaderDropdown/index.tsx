import { forwardRef } from 'react';

import { BtnMenuItem, Dropdown } from '@/components/ui';
import { UITexts } from '@/constants';
import { openModalColumnEdit } from '@/store/modalColumnEdit/actions';
import { openModalConfirm } from '@/store/modalConfirm/actions';
import { openModalTaskAdd } from '@/store/modalTaskAdd/actions';
import { useAppDispatch } from '@/store/store';
import { IFormDataColumn } from '@/utils';

export const TodoColumnHeaderDropdown = forwardRef<HTMLDivElement, IFormDataColumn>(
  ({ color, name }: IFormDataColumn, ref) => {
    const dispatch = useAppDispatch();

    const handleOpenModalTaskAdd = () => dispatch(openModalTaskAdd());
    const handleOpenModalColumnEdit = () => dispatch(openModalColumnEdit({ name, color }));
    const handleOpenModalConfirm = () =>
      dispatch(
        openModalConfirm({
          text: UITexts.COLUMN.CONFIRM_DELETE,
          onConfirm: () => alert('Deleted'),
        })
      );

    return (
      <Dropdown ref={ref}>
        <BtnMenuItem onClick={handleOpenModalTaskAdd} text={UITexts.TASK.ADD_NEW} typeBtn="add" />
        <BtnMenuItem onClick={handleOpenModalColumnEdit} text={UITexts.COLUMN.EDIT} typeBtn="edit" />
        <BtnMenuItem onClick={handleOpenModalConfirm} text={UITexts.COLUMN.DELETE} typeBtn="delete" />
      </Dropdown>
    );
  }
);
