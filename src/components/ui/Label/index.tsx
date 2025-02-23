import { IChildrenProps } from '@/utils';
import { LabelBlock } from './styled';

export const Label = ({ children }: IChildrenProps) => {
  return <LabelBlock>{children}</LabelBlock>;
};
