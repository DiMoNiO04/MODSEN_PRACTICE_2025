import styled from 'styled-components';
import { IIconProps, IconAdd, IconEdit, IconDelete, IconMaximize } from '@/components/icons';

type TBtnRound = 'add' | 'delete' | 'edit' | 'maximize';

interface IBtnRoundProps extends IIconProps {
  hasBorder?: boolean;
  type: TBtnRound;
  handle: () => void;
}

const Button = styled.button<{ hasBorder: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: ${({ hasBorder }) => (hasBorder ? '1px solid #CBD5E1' : 'none')};
  padding: ${({ hasBorder }) => (hasBorder ? '8px' : 'none')};
  border-radius: 50%;
  cursor: pointer;
  transition: background 0.2s ease;

  & > svg {
    transition: filter 0.2s ease;
  }

  @media (any-hover: hover) {
    &:hover {
      background: ${({ hasBorder }) => (hasBorder ? '#cbd5e1' : 'none')};

      & > svg {
        filter: invert(0.5);
      }
    }
  }
`;

export const BtnRound = ({ size, color, hasBorder = false, handle, type }: IBtnRoundProps) => {
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
    }
  };

  return (
    <Button hasBorder={hasBorder} type="button" onClick={handle}>
      {renderIcon()}
    </Button>
  );
};
