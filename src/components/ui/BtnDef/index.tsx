import { Button } from './styled';

type TBtnDef = 'button' | 'submit';

interface IBtnDefProps {
  text: string;
  typeBtn: TBtnDef;
}

export const BtnDef = ({ text, typeBtn }: IBtnDefProps) => {
  return <Button type={typeBtn}>{text}</Button>;
};
