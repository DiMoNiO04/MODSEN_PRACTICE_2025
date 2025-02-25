import { useState } from 'react';

import { TaskDeleteContent, TaskEditContent, TaskModalContent } from '@/components/blocks';
import { ModalContainer } from '@/components/layout';
import { ICardProps } from '@/components/ui';
import { IModalCloseProps } from '@/utils';

interface IModalTaskProps extends IModalCloseProps {
  cardData: ICardProps;
}

export const ModalTask = ({ onClose, cardData }: IModalTaskProps) => {
  const { title } = cardData;

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
