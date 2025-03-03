import { Link } from 'react-router-dom';

import { Button } from './styled';

type TBtnDef = 'button' | 'submit';

interface IBtnDefProps {
  text: string;
  typeBtn?: TBtnDef;
  isInvert?: boolean;
  onClick?: () => void;
  to?: string;
}

export const BtnDef = ({ text, typeBtn = 'button', isInvert, onClick, to }: IBtnDefProps) => {
  if (to) {
    return (
      <Link to={to}>
        <Button as="span" $isInvert={isInvert}>
          {text}
        </Button>
      </Link>
    );
  }

  return (
    <Button type={typeBtn} onClick={onClick} $isInvert={isInvert}>
      {text}
    </Button>
  );
};
