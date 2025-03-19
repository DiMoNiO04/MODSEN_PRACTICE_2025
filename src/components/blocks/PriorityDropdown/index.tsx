import { forwardRef } from 'react';

import { ColorText, Dropdown } from '@/components/ui';
import { TASK_PRIORITY } from '@/constants';
import { IOption } from '@/utils/interfaces';

import { PriorityItemBtn } from './styled';

interface IPriorityDropdown {
  onChange: (option: IOption) => void;
}

export const PriorityDropdown = forwardRef<HTMLDivElement, IPriorityDropdown>(({ onChange }, ref) => {
  return (
    <Dropdown ref={ref} isPriority>
      {Object.values(TASK_PRIORITY).map(({ id, title, color }) => (
        <PriorityItemBtn key={id} type="button" onClick={() => onChange({ id, title })}>
          <ColorText text={title} color={color} isFullWidth />
        </PriorityItemBtn>
      ))}
    </Dropdown>
  );
});
