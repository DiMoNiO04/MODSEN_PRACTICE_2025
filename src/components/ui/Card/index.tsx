import { useState } from 'react';
import { BtnRound, TextDef, TextH3 } from '..';
import { ModalTask } from '@/components/modals';
import { Block, TopBlockInfo } from './styled';
import { Priority } from '@/components/Priority';
import { IOption } from '@/utils';

export interface ICardProps {
  id: number;
  title: string;
  desc: string;
  priority: IOption;
  status: IOption;
}

export const Card = (cardData: ICardProps) => {
  const { title, desc, priority } = cardData;
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const toggleModalOpen = () => setIsModalOpen(!isModalOpen);

  return (
    <Block>
      <TopBlockInfo>
        <Priority color={priority.color} value={priority.value} />
        <BtnRound type="maximize" handle={toggleModalOpen} />
      </TopBlockInfo>
      <TextH3 text={title} />
      <TextDef text={desc} maxLines={3} />
      {isModalOpen && <ModalTask onClose={toggleModalOpen} cardData={cardData} />}
    </Block>
  );
};
