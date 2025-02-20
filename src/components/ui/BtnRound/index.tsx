import { forwardRef } from 'react';
import { IconAdd, IconEdit, IconDelete, IconMaximize, IconClose } from '@/components/icons';
import { Button } from './styled';
import { IIconProps } from '@/utils';

type TBtnRound = 'add' | 'delete' | 'edit' | 'maximize' | 'close';

interface IBtnRoundProps extends IIconProps {
  hasBorder?: boolean;
  type: TBtnRound;
  handle: () => void;
  ref?: unknown;
}

export const BtnRound = forwardRef<HTMLButtonElement, IBtnRoundProps>(
  ({ color, size, hasBorder = false, handle, type }: IBtnRoundProps, ref) => {
    const renderIcon = () => {
      switch (type) {
        case 'add':
          return <IconAdd size={size} color={color} />;
        case 'edit':
          return <IconEdit size={size} color={color} />;
        case 'delete':
          return <IconDelete size={size} color={color} />;
        case 'maximize':
          return <IconMaximize size={size} color={color} />;
        case 'close':
          return <IconClose size={size} color={color} />;
      }
    };

    return (
      <Button hasBorder={hasBorder} type="button" onClick={handle} ref={ref}>
        {renderIcon()}
      </Button>
    );
  }
);
