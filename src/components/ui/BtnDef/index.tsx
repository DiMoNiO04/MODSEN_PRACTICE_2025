import { Button } from './styled';

type TBtnDef = 'button' | 'submit';

interface IBtnDefProps {
  text: string;
  typeBtn: TBtnDef;
  onClick?: () => void;
  isInvert?: boolean;
}

export const BtnDef = ({ text, typeBtn, onClick, isInvert }: IBtnDefProps) => {
  return (
    <Button type={typeBtn} onClick={onClick} isInvert={isInvert}>
      {text}
    </Button>
  );
};
