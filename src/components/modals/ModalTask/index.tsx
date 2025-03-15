import { useEffect, useState } from 'react';

import { TaskDeleteContent, TaskEditContent, TaskModalContent } from '@/components/blocks';
import { ModalContainer } from '@/components/layout';
import { closeModalTask } from '@/store/modalTask/actions';
import { useAppDispatch, useAppSelector } from '@/store/store';

export const ModalTask = () => {
  const dispatch = useAppDispatch();
  const { cardData, isOpen } = useAppSelector(({ modals }) => modals.modalTask);
  const onClose = () => dispatch(closeModalTask());

  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

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

  if (!cardData || !isOpen) return null;

  return (
    <ModalContainer onClose={onClose}>
      {isEditing ? (
        <TaskEditContent cardData={cardData} onClose={onClose} handleCancel={handleCancel} />
      ) : isDeleting ? (
        <TaskDeleteContent id={cardData.id} handleCancel={handleCancel} onClose={onClose} />
      ) : (
        <TaskModalContent cardData={cardData} handleOpenDelete={handleOpenDelete} handleOpenEdit={handleOpenEdit} />
      )}
    </ModalContainer>
  );
};
