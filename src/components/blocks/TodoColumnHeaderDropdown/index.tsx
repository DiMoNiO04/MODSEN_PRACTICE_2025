import { forwardRef, useState } from 'react';

import { ModalAddTask, ModalConfirm, ModalEditColumn } from '@/components/modals';
import { BtnMenuItem, Dropdown } from '@/components/ui';
import { UITexts } from '@/constants';
import { IFormDataColumn } from '@/utils';

export const TodoColumnHeaderDropdown = forwardRef<HTMLDivElement, IFormDataColumn>(
  ({ color, name }: IFormDataColumn, ref) => {
    const [isModalOpenAddTask, setIsModalOpenAddTask] = useState<boolean>(false);
    const [isModalOpenEditColumn, setIsModalOpenEditColumn] = useState<boolean>(false);
    const [isModalOpenDeleteColumn, setIsModalOpenDeleteColumn] = useState<boolean>(false);

    const toggleAddTaskModal = () => setIsModalOpenAddTask(!isModalOpenAddTask);
    const toggleEditColumnModal = () => setIsModalOpenEditColumn(!isModalOpenEditColumn);
    const toggleDeleteColumnModal = () => setIsModalOpenDeleteColumn(!isModalOpenDeleteColumn);
    const handleConfirmYes = () => alert('Deleted');

    return (
      <>
        <Dropdown ref={ref}>
          <BtnMenuItem onClick={toggleAddTaskModal} text={UITexts.TASK.ADD_NEW} typeBtn="add" />
          <BtnMenuItem onClick={toggleEditColumnModal} text={UITexts.COLUMN.EDIT} typeBtn="edit" />
          <BtnMenuItem onClick={toggleDeleteColumnModal} text={UITexts.COLUMN.DELETE} typeBtn="delete" />
        </Dropdown>
        {isModalOpenAddTask && <ModalAddTask onClose={toggleAddTaskModal} />}
        {isModalOpenEditColumn && <ModalEditColumn onClose={toggleEditColumnModal} name={name} color={color} />}
        {isModalOpenDeleteColumn && (
          <ModalConfirm
            onClose={toggleDeleteColumnModal}
            text={UITexts.COLUMN.CONFIRM_DELETE}
            handleYes={handleConfirmYes}
          />
        )}
      </>
    );
  }
);
