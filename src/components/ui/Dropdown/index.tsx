import { IChildrenProps } from '@/utils';
import { DropdownBlock } from './styled';
import { forwardRef } from 'react';

export const Dropdown = forwardRef<HTMLDivElement, IChildrenProps>(({ children }, ref) => {
  return <DropdownBlock ref={ref}>{children}</DropdownBlock>;
});
