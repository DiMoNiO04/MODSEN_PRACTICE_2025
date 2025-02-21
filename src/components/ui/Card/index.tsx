import { useState } from 'react';
import { BtnRound, ItemHash } from '..';
import { ModalTask } from '@/components/modals';
import { Block, Description, Title, TopBlockInfo } from './styled';
import { ICardStatus } from '@/utils';

export interface ICardProps {
  id: number;
  title: string;
  desc: string;
  status: ICardStatus;
}

export const Card = ({ title, desc, status }: ICardProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const toggleModalOpen = () => setIsModalOpen(!isModalOpen);

  return (
    <Block>
      <TopBlockInfo>
        <ItemHash isLevel color={status.color} text={status.text} />
        <BtnRound type="maximize" handle={toggleModalOpen} />
      </TopBlockInfo>
      <Title>{title}</Title>
      <Description>{desc}</Description>
      {isModalOpen && <ModalTask onClose={toggleModalOpen} />}
    </Block>
  );
};
