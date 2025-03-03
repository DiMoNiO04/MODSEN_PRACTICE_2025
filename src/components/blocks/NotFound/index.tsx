import { BtnDef } from '@/components/ui';

import { Block, Title } from './styled';

export const NotFound = () => {
  return (
    <Block>
      <Title>Страница не найдена - 404</Title>
      <BtnDef text={'На главную'} typeBtn={'button'} to="/" />
    </Block>
  );
};
