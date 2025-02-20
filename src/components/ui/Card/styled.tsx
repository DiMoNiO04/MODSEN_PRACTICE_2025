import styled from 'styled-components';
import { BtnRound, ItemHash } from '..';
import { useState } from 'react';
import { ModalTask } from '@/components/modals';

const TopBlockInfo = styled.div<{ hasPriority: boolean }>`
  display: flex;
  justify-content: ${({ hasPriority }) => (hasPriority ? 'space-between' : 'flex-end')};
  align-items: center;
  margin-bottom: 12px;
`;

const Block = styled.div`
  border-radius: 32px;
  padding: 12px;
  box-shadow: 0px 2px 4px -2px #1717170f;
  border: 1px solid #e2e8f0;
  background: #ffffff;
`;

const Title = styled.h3`
  font-size: 16px;
  line-height: 22px;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 8px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Description = styled.p`
  color: #475569;
  font-size: 16px;
  line-height: 25.6px;
  font-weight: 400;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

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
        <BtnRound type="maximize" size={20} handle={toggleModalOpen} />
      </TopBlockInfo>
      <Title>{title}</Title>
      <Description>{desc}</Description>
      {isModalOpen && <ModalTask onClose={toggleModalOpen} />}
    </Block>
  );
};
