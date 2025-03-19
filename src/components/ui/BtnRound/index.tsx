import { forwardRef } from 'react';

import { IconAdd, IconClose, IconMaximize, IconMore } from '@/components/icons';
import { IIconProps } from '@/utils/interfaces';

import { Button } from './styled';

type TBtnRound = 'add' | 'maximize' | 'close' | 'more';

interface IBtnRoundProps extends IIconProps {
  type: TBtnRound;
  hasBorder?: boolean;
  handle: () => void;
}

export const BtnRound = forwardRef<HTMLButtonElement, IBtnRoundProps>(
  ({ color, type, hasBorder = false, handle }: IBtnRoundProps, ref) => {
    const renderIcon = () => {
      switch (type) {
        case 'add':
          return <IconAdd color={color} />;
        case 'maximize':
          return <IconMaximize />;
        case 'close':
          return <IconClose />;
        case 'more':
          return <IconMore color={color} />;
      }
    };

    return (
      <Button $hasBorder={hasBorder} type="button" onClick={handle} ref={ref}>
        {renderIcon()}
      </Button>
    );
  }
);
