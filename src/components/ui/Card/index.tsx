import { useState } from 'react';
import { BtnRound } from '..';
import { ModalTask } from '@/components/modals';
import { Block, Description, Title, TopBlockInfo } from './styled';
import { ICardPriority } from '@/utils';
import { Priority } from '@/components/Priority';

export interface ICardProps {
  id: number;
  title: string;
  desc: string;
  priority: ICardPriority;
}

export const Card = ({ title, desc, priority }: ICardProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const toggleModalOpen = () => setIsModalOpen(!isModalOpen);

  return (
    <Block>
      <TopBlockInfo>
        <Priority color={priority.color} text={priority.text} />
        <BtnRound type="maximize" handle={toggleModalOpen} />
      </TopBlockInfo>
      <Title>{title}</Title>
      <Description>{desc}</Description>
      {isModalOpen && <ModalTask onClose={toggleModalOpen} />}
    </Block>
  );
};
