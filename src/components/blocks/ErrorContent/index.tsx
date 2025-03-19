import { BtnDef } from '@/components/ui';
import { UITexts } from '@/constants';
import { IText } from '@/utils/interfaces';

import { Block, Title } from './styled';

export const ErrorContent = ({ text }: IText) => {
  return (
    <Block>
      <Title>{text}</Title>
      <BtnDef text={UITexts.BTNS.HOME} typeBtn={'button'} to="/" />
    </Block>
  );
};
