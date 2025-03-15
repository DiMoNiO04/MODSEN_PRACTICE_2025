import { Priority } from '@/components/blocks';
import { openModalTask } from '@/store/modalTask/actions';
import { useAppDispatch } from '@/store/store';
import { ICard } from '@/utils/interfaces';

import { BtnRound, TextDef, TextH3 } from '..';
import { Block, TopBlockInfo } from './styled';

export const Card = (cardData: ICard) => {
  const { title, desc, priority } = cardData;

  const dispatch = useAppDispatch();

  const handleOpenModal = () => dispatch(openModalTask(cardData));

  return (
    <Block>
      <TopBlockInfo>
        <Priority priorityId={priority} />
        <BtnRound type="maximize" handle={handleOpenModal} />
      </TopBlockInfo>
      <TextH3 text={title} />
      {desc && <TextDef text={desc} maxLines={3} />}
    </Block>
  );
};
