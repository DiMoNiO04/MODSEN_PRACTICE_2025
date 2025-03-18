import { forwardRef } from 'react';

import { IChildrenProps } from '@/utils/interfaces';

import { DropdownBlock } from './styled';

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
