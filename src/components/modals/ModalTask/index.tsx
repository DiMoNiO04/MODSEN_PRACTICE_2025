import { useState } from 'react';

import { TaskDeleteContent, TaskEditContent, TaskModalContent } from '@/components/blocks';
import { ModalContainer } from '@/components/layout';
import { toggleModalTask } from '@/store/modalTask/actions';
import { useAppDispatch, useAppSelector } from '@/store/store';

export const ModalTask = () => {
  const dispatch = useAppDispatch();
  const { cardData, isOpen } = useAppSelector(({ modals }) => modals.modalTask);
  const onClose = () => dispatch(toggleModalTask(null));

  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleOpenEdit = () => setIsEditing(true);
  const handleOpenDelete = () => setIsDeleting(true);
  const handleCancel = () => {
    setIsEditing(false);
    setIsDeleting(false);
  };

  if (!cardData || !isOpen) return null;

  return (
    <ModalContainer onClose={onClose}>
      {isEditing ? (
        <TaskEditContent cardData={cardData} onClose={onClose} handleCancel={handleCancel} />
      ) : isDeleting ? (
        <TaskDeleteContent handleCancel={handleCancel} handleClose={onClose} />
      ) : (
        <TaskModalContent cardData={cardData} handleOpenDelete={handleOpenDelete} handleOpenEdit={handleOpenEdit} />
      )}
    </ModalContainer>
  );
};
