import { ColorText } from '@/components/ui';
import { UITexts } from '@/constants';
import { openModalTaskAdd } from '@/store/modalTaskAdd/actions';
import { useAppDispatch } from '@/store/store';
import { IOption } from '@/utils';

import { Button } from './styled';

interface ITodoColumnTaskAddProps {
  status: IOption;
}

export const TodoColumnTaskAdd = ({ status }: ITodoColumnTaskAddProps) => {
  const dispatch = useAppDispatch();

  const toggleTaskModal = () => dispatch(openModalTaskAdd({ status }));

  return (
    <Button type="button" color={status.color} onClick={toggleTaskModal}>
      <ColorText color={status.color} text={UITexts.BTNS.ADD_TASK} />
    </Button>
  );
};
