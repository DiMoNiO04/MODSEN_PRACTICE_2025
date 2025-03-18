import { useState } from 'react';

import { BtnDef, BtnsBlock, Form, Input, ModalTitle, TextArea } from '@/components/ui';
import { Select } from '@/components/ui/Select';
import { CARD_PRIORITY, UITexts } from '@/constants';
import { useForm } from '@/hooks';
import { setKanbanBoardData } from '@/store/kanbanBoard/actions';
import { openNotification } from '@/store/notification/actions';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { ICard, IKanbanCards, IKanbanColums, IKanbanData, IOption } from '@/utils/interfaces';

interface ITaskEditContentProps {
  cardData: ICard;
  handleCancel: () => void;
  onClose: () => void;
}

export const TaskEditContent = ({ cardData, handleCancel, onClose }: ITaskEditContentProps) => {
  const dispatch = useAppDispatch();

  const initialData: ICard = { ...cardData };
  const { kanbanData } = useAppSelector(({ kanbanBoard }) => kanbanBoard);

  const { formData, handleChange, handleSubmit } = useForm<ICard>({ initialData });

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleClose = () => {
    onClose();
    setIsSubmitted(false);
  };

  const onSubmit = () => {
    setIsSubmitted(true);

    if (formData.title.trim() === '') {
      dispatch(
        openNotification({
          isSuccess: false,
          text: UITexts.NOTIFICATION.ERROR_REQUIRED_FILEDS,
        })
      );
      return;
    }

    const updateTask: ICard = { ...formData };

    const oldColumnId: string = cardData.columnId;
    const newColumnId: string = updateTask.columnId;

    const updatedColumns: IKanbanColums = { ...kanbanData.columns };

    if (oldColumnId !== newColumnId) {
      updatedColumns[oldColumnId] = {
        ...updatedColumns[oldColumnId],
        cardIds: updatedColumns[oldColumnId].cardIds.filter((cardId) => cardId !== formData.id),
      };

      updatedColumns[newColumnId] = {
        ...updatedColumns[newColumnId],
        cardIds: [...updatedColumns[newColumnId].cardIds, formData.id],
      };
    }

    const updatedCards: IKanbanCards = {
      ...kanbanData.cards,
      [formData.id]: updateTask,
    };

    const updatedKanbanData: IKanbanData = {
      columns: updatedColumns,
      cards: updatedCards,
      columnsOrder: kanbanData.columnsOrder,
    };

    dispatch(setKanbanBoardData(updatedKanbanData));

    dispatch(
      openNotification({
        isSuccess: true,
        text: UITexts.NOTIFICATION.SUCCESS_EDIT_CARD,
      })
    );

    handleClose();
  };

  const onPriorityChange = (selectedOption: IOption) =>
    handleChange({ target: { name: 'priority', value: selectedOption.id } });

  const onStatusChange = (selectedOption: IOption) =>
    handleChange({ target: { name: 'columnId', value: selectedOption.id } });

  return (
    <>
      <ModalTitle text={UITexts.TASK.EDIT} />
      <Form onSubmit={handleSubmit}>
        <Input
          labelText={UITexts.LABELS.NAME}
          name="title"
          type="text"
          value={formData.title}
          onChange={handleChange}
          required
          errorMessage={isSubmitted && formData.title.trim() === '' ? UITexts.NOTIFICATION.REQUIRED_FIELD : undefined}
        />
        <TextArea labelText={UITexts.LABELS.DESCRIPTION} name="desc" value={formData.desc} onChange={handleChange} />
        <Select
          labelText={UITexts.LABELS.PRIORITY}
          value={formData.priority}
          onChange={onPriorityChange}
          options={Object.values(CARD_PRIORITY)}
        />
        <Select
          labelText={UITexts.LABELS.STATUS}
          value={formData.columnId}
          onChange={onStatusChange}
          options={Object.values(kanbanData.columns).map((column) => ({
            id: column.id,
            title: column.title,
          }))}
        />
        <BtnsBlock>
          <BtnDef text={UITexts.TASK.INFO} typeBtn={'button'} onClick={handleCancel} isInvert />
          <BtnDef text={UITexts.BTNS.SAVE} typeBtn={'submit'} onClick={onSubmit} />
        </BtnsBlock>
      </Form>
    </>
  );
};
