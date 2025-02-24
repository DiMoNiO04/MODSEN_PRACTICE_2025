import { IChildrenProps } from '@/utils';
import { DropdownBlock } from './styled';
import { forwardRef } from 'react';

interface IDropdownProps extends IChildrenProps {
  isPriority?: boolean;
  isFullWidth?: boolean;
}

export const Dropdown = forwardRef<HTMLDivElement, IDropdownProps>(({ children, isPriority, isFullWidth }, ref) => {
  return (
    <DropdownBlock ref={ref} $isPriority={isPriority} $isFullWidth={isFullWidth}>
      {children}
    </DropdownBlock>
  );
});
