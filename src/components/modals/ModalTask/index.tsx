import { useState } from 'react';

import { ModalContainer } from '@/components/layout';
import { TaskDeleteContent } from '@/components/TaskDeleteContent';
import { TaskEditContent } from '@/components/TaskEditContent';
import { TaskModalContent } from '@/components/TaskModalContent';
import { ICardProps } from '@/components/ui';
import { IModalCloseProps } from '@/utils';

interface IModalTaskProps extends IModalCloseProps {
  cardData: ICardProps;
}

export const ModalTask = ({ onClose, cardData }: IModalTaskProps) => {
  const { title, desc } = cardData;

  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleOpenEdit = () => setIsEditing(true);
  const handleOpenDelete = () => setIsDeleting(true);
  const handleCancel = () => {
    setIsEditing(false);
    setIsDeleting(false);
  };

  return (
    <ModalContainer onClose={onClose}>
      {isEditing ? (
        <TaskEditContent cardData={cardData} onClose={onClose} handleCancel={handleCancel} />
      ) : isDeleting ? (
        <TaskDeleteContent title={title} handleCancel={handleCancel} handleClose={onClose} />
      ) : (
        <TaskModalContent cardData={cardData} handleOpenDelete={handleOpenDelete} handleOpenEdit={handleOpenEdit} />
      )}
    </ModalContainer>
  );
};
