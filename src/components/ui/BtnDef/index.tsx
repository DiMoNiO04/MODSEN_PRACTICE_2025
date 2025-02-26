import { Button } from './styled';

type TBtnDef = 'button' | 'submit';

interface IBtnDefProps {
  text: string;
  typeBtn: TBtnDef;
  isInvert?: boolean;
  onClick?: () => void;
}

export const BtnDef = ({ text, typeBtn, isInvert, onClick }: IBtnDefProps) => {
  return (
    <Button type={typeBtn} onClick={onClick} $isInvert={isInvert}>
      {text}
    </Button>
  );
};
