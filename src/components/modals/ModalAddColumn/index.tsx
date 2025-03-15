import { ModalContainer } from '@/components/layout';
import { BtnDef, Form, Input, ModalTitle } from '@/components/ui';
import { UITexts } from '@/constants';
import { useForm } from '@/hooks';
import { setKanbanBoardData } from '@/store/kanbanBoard/actions';
import { closeModaColumnAdd } from '@/store/modalColumnAdd/actions';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { getRandomColor, IFormDataColumn } from '@/utils';

export const ModalAddColumn = () => {
  const dispatch = useAppDispatch();
  const { isOpen } = useAppSelector(({ modals }) => modals.modalColumnAdd);
  const kanbanData = useAppSelector(({ kanbanBoard }) => kanbanBoard.kanbanData);

  const initialData: IFormDataColumn = { id: `column-${Date.now()}`, title: '', color: getRandomColor() };

  const onClose = () => {
    dispatch(closeModaColumnAdd());
    resetForm();
  };

  const onSubmit = () => {
    const newColumn = {
      id: `column-${Date.now()}`,
      title: formData.title,
      color: formData.color,
      cardIds: [],
    };

    const updatedKanbanData = {
      columns: {
        ...kanbanData.columns,
        [newColumn.id]: newColumn,
      },
      cards: kanbanData.cards,
    };

    dispatch(setKanbanBoardData(updatedKanbanData));
  };

  const { formData, handleChange, handleSubmit, resetForm } = useForm<IFormDataColumn>({
    initialData,
    onClose,
    onSubmit,
  });

  if (!isOpen) return null;

  return (
    <ModalContainer onClose={onClose}>
      <ModalTitle text={UITexts.COLUMN.ADD_NEW} />
      <Form onSubmit={handleSubmit}>
        <Input
          labelText={UITexts.LABELS.NAME}
          name="title"
          type="text"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <Input
          labelText={UITexts.LABELS.COLOR}
          name="color"
          type="color"
          value={formData.color}
          onChange={handleChange}
        />
        <BtnDef text={UITexts.BTNS.SAVE} typeBtn="submit" />
      </Form>
    </ModalContainer>
  );
};
