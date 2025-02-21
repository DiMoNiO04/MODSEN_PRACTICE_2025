import { IChildrenProps } from '@/utils';
import { DropdownBlock } from './styled';
import { forwardRef } from 'react';

interface IDropdownProps extends IChildrenProps {
  isPriority?: boolean;
}

export const Dropdown = forwardRef<HTMLDivElement, IDropdownProps>(({ children, isPriority }, ref) => {
  return (
    <DropdownBlock ref={ref} isPriority={isPriority}>
      {children}
    </DropdownBlock>
  );
});
