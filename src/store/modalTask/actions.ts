import { ICardProps } from '@/components/ui';

enum EModalTaskActions {
  TOGGLE_MODAL = 'TOGGLE_MODAL_TASK',
}

const toggleModalTask = (cardData: ICardProps | null) => ({
  type: EModalTaskActions.TOGGLE_MODAL,
  payload: cardData,
});

export { EModalTaskActions, toggleModalTask };
