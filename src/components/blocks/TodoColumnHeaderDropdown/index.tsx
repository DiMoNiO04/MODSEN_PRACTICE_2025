import { forwardRef } from 'react';

import { BtnMenuItem, Dropdown } from '@/components/ui';
import { UITexts } from '@/constants';
import { openModalColumnDelete } from '@/store/modalColumnDelete/actions';
import { openModalColumnEdit } from '@/store/modalColumnEdit/actions';
import { openModalTaskAdd } from '@/store/modalTaskAdd/actions';
import { useAppDispatch } from '@/store/store';
import { IFormDataColumn } from '@/utils';

export const TodoColumnHeaderDropdown = forwardRef<HTMLDivElement, IFormDataColumn>(
  ({ id, color, title }: IFormDataColumn, ref) => {
    const dispatch = useAppDispatch();

    const handleOpenModalTaskAdd = () => dispatch(openModalTaskAdd({ columnId: id }));
    const handleOpenModalColumnEdit = () => dispatch(openModalColumnEdit({ id, title, color }));
    const handleOpenModalConfirm = () => dispatch(openModalColumnDelete({ id }));

    const isSpecialColumn = ['column-1', 'column-2', 'column-3'].includes(id);

    return (
      <Dropdown ref={ref}>
        <BtnMenuItem onClick={handleOpenModalTaskAdd} text={UITexts.TASK.ADD_NEW} typeBtn="add" />

        {!isSpecialColumn && (
          <>
            <BtnMenuItem onClick={handleOpenModalColumnEdit} text={UITexts.COLUMN.EDIT} typeBtn="edit" />
            <BtnMenuItem onClick={handleOpenModalConfirm} text={UITexts.COLUMN.DELETE} typeBtn="delete" />
          </>
        )}
      </Dropdown>
    );
  }
);
