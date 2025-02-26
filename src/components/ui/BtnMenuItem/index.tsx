import { BtnMenuItemBlock } from './styled';

export type TBtnMenuItem = 'add' | 'edit' | 'delete' | 'default';

interface IBtnMenuItemProps {
  text: string;
  typeBtn?: TBtnMenuItem;
  onClick: () => void;
}

export const BtnMenuItem = ({ text, typeBtn = 'default', onClick }: IBtnMenuItemProps) => {
  return (
    <BtnMenuItemBlock onClick={onClick} $typeBtn={typeBtn} type="button">
      {text}
    </BtnMenuItemBlock>
  );
};
