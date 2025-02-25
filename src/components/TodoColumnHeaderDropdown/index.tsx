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
    const [isModalOpenEditColmn, setIsModalOpenEditColumn] = useState<boolean>(false);
    const [isModalOpenDeleteColumn, setIsModalOpenDeleteColumn] = useState<boolean>(false);

    const toggleModalOpenAddTask = () => setIsModalOpenAddTask(!isModalOpenAddTask);
    const toggleModalOpenEditColumn = () => setIsModalOpenEditColumn(!isModalOpenEditColmn);
    const toggleModalOpenDeleteColumn = () => setIsModalOpenDeleteColumn(!isModalOpenDeleteColumn);

    return (
      <>
        <Dropdown ref={ref}>
          <BtnMenuItem onClick={toggleModalOpenAddTask} text={'Add new task'} typeBtn="add" />
          <BtnMenuItem onClick={toggleModalOpenEditColumn} text={'Edit column'} typeBtn="edit" />
          <BtnMenuItem onClick={toggleModalOpenDeleteColumn} text={'Delete column'} typeBtn="delete" />
        </Dropdown>
        {isModalOpenAddTask && <ModalAddTask onClose={toggleModalOpenAddTask} />}
        {isModalOpenEditColmn && <ModalEditColumn onClose={toggleModalOpenEditColumn} name={name} color={color} />}
        {isModalOpenDeleteColumn && (
          <ModalConfirm
            onClose={toggleModalOpenDeleteColumn}
            text={CONFIRM_TEXT_DELETE}
            handleYes={() => alert('Deleted')}
          />
        )}
      </>
    );
  }
);
