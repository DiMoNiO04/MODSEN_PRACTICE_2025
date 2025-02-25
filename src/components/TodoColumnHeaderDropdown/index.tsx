import { forwardRef, useState } from 'react';

import { IFormDataColumn } from '@/utils/interfaces';

import { ModalAddTask } from '../modals';
import { ModalConfirm } from '../modals/ModalConfirm';
import { ModalEditColumn } from '../modals/ModalEditColumn';
import { BtnMenuItem, Dropdown } from '../ui';

const CONFIRM_TEXT_DELETE = 'Are you sure you want to delete the column and all its associated tasks?';

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
          <BtnMenuItem onClick={toggleAddTaskModal} text={'Add new task'} typeBtn="add" />
          <BtnMenuItem onClick={toggleEditColumnModal} text={'Edit column'} typeBtn="edit" />
          <BtnMenuItem onClick={toggleDeleteColumnModal} text={'Delete column'} typeBtn="delete" />
        </Dropdown>
        {isModalOpenAddTask && <ModalAddTask onClose={toggleAddTaskModal} />}
        {isModalOpenEditColumn && <ModalEditColumn onClose={toggleEditColumnModal} name={name} color={color} />}
        {isModalOpenDeleteColumn && (
          <ModalConfirm onClose={toggleDeleteColumnModal} text={CONFIRM_TEXT_DELETE} handleYes={handleConfirmYes} />
        )}
      </>
    );
  }
);
