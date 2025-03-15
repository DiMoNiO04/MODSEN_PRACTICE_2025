import { ColorText } from '@/components/ui';
import { UITexts } from '@/constants';
import { openModalTaskAdd } from '@/store/modalTaskAdd/actions';
import { useAppDispatch } from '@/store/store';

import { Button } from './styled';

interface ITodoColumnTaskAddProps {
  title: string;
  color: string;
}

export const TodoColumnTaskAdd = ({ color }: ITodoColumnTaskAddProps) => {
  const dispatch = useAppDispatch();

  const toggleTaskModal = () => dispatch(openModalTaskAdd());

  return (
    <Button type="button" color={color} onClick={toggleTaskModal}>
      <ColorText color={color} text={UITexts.BTNS.ADD_TASK} />
    </Button>
  );
};
