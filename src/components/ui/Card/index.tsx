import { Priority } from '@/components/blocks';
import { toggleModalTask } from '@/store/modalTask/actions';
import { useAppDispatch } from '@/store/store';
import { IOption } from '@/utils';

import { BtnRound, TextDef, TextH3 } from '..';
import { Block, TopBlockInfo } from './styled';

export interface ICardProps {
  id: number;
  title: string;
  desc: string;
  priority: IOption;
  status: IOption;
}

export const Card = (cardData: ICardProps) => {
  const { title, desc, priority } = cardData;

  const dispatch = useAppDispatch();

  const handleOpenModal = () => dispatch(toggleModalTask(cardData));

  return (
    <Block>
      <TopBlockInfo>
        <Priority color={priority.color} value={priority.value} />
        <BtnRound type="maximize" handle={handleOpenModal} />
      </TopBlockInfo>
      <TextH3 text={title} />
      <TextDef text={desc} maxLines={3} />
    </Block>
  );
};
