import { BtnDef } from '@/components/ui';

import { Block, Title } from './styled';

interface IErrorContentProps {
  text: string;
}

export const ErrorContent = ({ text }: IErrorContentProps) => {
  return (
    <Block>
      <Title>{text}</Title>
      <BtnDef text={'На главную'} typeBtn={'button'} to="/" />
    </Block>
  );
};
