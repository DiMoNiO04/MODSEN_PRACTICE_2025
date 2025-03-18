import { forwardRef } from 'react';

import { BtnMenuItem, Dropdown } from '@/components/ui';
import { UITexts } from '@/constants';
import { EColumnsName } from '@/constants/kanbanData';
import { openModalColumnDelete } from '@/store/modalColumnDelete/actions';
import { openModalColumnEdit } from '@/store/modalColumnEdit/actions';
import { openModalTaskAdd } from '@/store/modalTaskAdd/actions';
import { useAppDispatch } from '@/store/store';
import { IColumnWithoutCardIds } from '@/utils/interfaces';

export const TodoColumnHeaderDropdown = forwardRef<HTMLDivElement, IColumnWithoutCardIds>(
  ({ id, color, title }: IColumnWithoutCardIds, ref) => {
    const dispatch = useAppDispatch();

    const handleOpenModalTaskAdd = () => dispatch(openModalTaskAdd({ columnId: id }));
    const handleOpenModalColumnEdit = () => dispatch(openModalColumnEdit({ id, title, color }));
    const handleOpenModalConfirm = () => dispatch(openModalColumnDelete({ id }));

    const isSpecialColumn: boolean = [EColumnsName.TODO, EColumnsName.PROGRESS, EColumnsName.DONE].includes(
      id as EColumnsName
    );

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
