import { ColorText } from '@/components/ui';
import { UITexts } from '@/constants';
import { openModalTaskAdd } from '@/store/modalTaskAdd/actions';
import { useAppDispatch } from '@/store/store';

import { Button } from './styled';

interface ITodoColumnTaskAddProps {
  columnId: string;
  title: string;
  color: string;
}

export const TodoColumnTaskAdd = ({ columnId, color }: ITodoColumnTaskAddProps) => {
  const dispatch = useAppDispatch();

  const toggleTaskModal = () => dispatch(openModalTaskAdd({ columnId }));

  return (
    <Button type="button" color={color} onClick={toggleTaskModal}>
      <ColorText color={color} text={UITexts.BTNS.ADD_TASK} />
    </Button>
  );
};
