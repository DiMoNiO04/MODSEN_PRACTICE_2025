import styled from 'styled-components';
import { ItemHash } from '..';

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
`;

const Description = styled.p`
  color: #475569;
  font-size: 16px;
  line-height: 25.6px;
  font-weight: 400;
`;

export interface ICardProps {
  id: number;
  title: string;
  desc: string;
  priority?: string;
}

export const Card = ({ title, desc, priority }: ICardProps) => {
  return (
    <Block>
      <ItemHash isLevel color="#4F46E5" text={priority} />
      <Title>{title}</Title>
      <Description>{desc}</Description>
    </Block>
  );
};
