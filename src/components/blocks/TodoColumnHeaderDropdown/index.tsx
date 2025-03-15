import { forwardRef } from 'react';

import { BtnMenuItem, Dropdown } from '@/components/ui';
import { UITexts } from '@/constants';
import { setKanbanBoardData } from '@/store/kanbanBoard/actions';
import { openModalColumnEdit } from '@/store/modalColumnEdit/actions';
import { openModalConfirm } from '@/store/modalConfirm/actions';
import { openModalTaskAdd } from '@/store/modalTaskAdd/actions';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { IFormDataColumn } from '@/utils';

export const TodoColumnHeaderDropdown = forwardRef<HTMLDivElement, IFormDataColumn>(
  ({ id, color, title }: IFormDataColumn, ref) => {
    const dispatch = useAppDispatch();

    const kanbanData = useAppSelector(({ kanbanBoard }) => kanbanBoard.kanbanData);

    const onConfirmDelete = () => {
      const updatedKanbanData = { ...kanbanData };

      const column = updatedKanbanData.columns[id];

      column.cardIds.forEach((cardId) => {
        delete updatedKanbanData.cards[cardId];
      });

      delete updatedKanbanData.columns[id];

      dispatch(setKanbanBoardData(updatedKanbanData));
    };

    const handleOpenModalTaskAdd = () => dispatch(openModalTaskAdd());
    const handleOpenModalColumnEdit = () => dispatch(openModalColumnEdit({ id, title, color }));
    const handleOpenModalConfirm = () =>
      dispatch(
        openModalConfirm({
          text: UITexts.COLUMN.CONFIRM_DELETE,
          onConfirm: onConfirmDelete,
        })
      );

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
