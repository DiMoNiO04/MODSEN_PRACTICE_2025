import { useState } from 'react';
import { BtnRound, ItemHash } from '..';
import { ModalTask } from '@/components/modals';
import { Block, Description, Title, TopBlockInfo } from './styled';

export interface ICardProps {
  id: number;
  title: string;
  desc: string;
  priority?: string;
}

export const Card = ({ title, desc, priority }: ICardProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const toggleModalOpen = () => setIsModalOpen(!isModalOpen);

  const hasPriority = Boolean(priority);

  return (
    <Block>
      <TopBlockInfo hasPriority={hasPriority}>
        {hasPriority && <ItemHash isLevel color="#4F46E5" text={priority} />}
        <BtnRound type="maximize" handle={toggleModalOpen} />
      </TopBlockInfo>
      <Title>{title}</Title>
      <Description>{desc}</Description>
      {isModalOpen && <ModalTask onClose={toggleModalOpen} />}
    </Block>
  );
};
