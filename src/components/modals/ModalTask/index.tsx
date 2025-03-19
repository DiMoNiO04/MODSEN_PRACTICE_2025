import { useEffect, useState } from 'react';

import { TaskDeleteContent, TaskEditContent, TaskModalContent } from '@/components/blocks';
import { ModalContainer } from '@/components/layout';
import { closeModalTask } from '@/store/modalTask/actions';
import { useAppDispatch, useAppSelector } from '@/store/store';

export const ModalTask = () => {
  const dispatch = useAppDispatch();

  const { taskData, isOpen } = useAppSelector(({ modals }) => modals.modalTask);
  const onClose = () => dispatch(closeModalTask());

  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  const handleOpenEdit = () => setIsEditing(true);
  const handleOpenDelete = () => setIsDeleting(true);
  const handleCancel = () => {
    setIsEditing(false);
    setIsDeleting(false);
  };

  useEffect(() => {
    setIsDeleting(false);
    setIsEditing(false);
  }, [isOpen]);

  if (!taskData || !isOpen) return null;

  return (
    <ModalContainer onClose={onClose}>
      {isEditing ? (
        <TaskEditContent taskData={taskData} onClose={onClose} handleCancel={handleCancel} />
      ) : isDeleting ? (
        <TaskDeleteContent id={taskData.id} handleCancel={handleCancel} onClose={onClose} />
      ) : (
        <TaskModalContent taskData={taskData} handleOpenDelete={handleOpenDelete} handleOpenEdit={handleOpenEdit} />
      )}
    </ModalContainer>
  );
};
