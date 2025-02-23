import { BtnMenuItemBlock } from './styled';

export type TBtnMenuItem = 'add' | 'edit' | 'delete' | 'default';

interface IBtnMenuItemProps {
  text: string;
  onClick: () => void;
  typeBtn?: TBtnMenuItem;
}

export const BtnMenuItem = ({ onClick, text, typeBtn = 'default' }: IBtnMenuItemProps) => {
  return (
    <BtnMenuItemBlock onClick={onClick} $typeBtn={typeBtn} type="button">
      {text}
    </BtnMenuItemBlock>
  );
};
