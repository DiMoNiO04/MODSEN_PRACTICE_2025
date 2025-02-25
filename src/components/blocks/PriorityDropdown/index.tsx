import { forwardRef } from 'react';

import { ColorText, Dropdown } from '@/components/ui';
import { CARD_PRIORITY } from '@/constants';

import { PriorityItemBtn } from './styled';

export const PriorityDropdown = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <Dropdown ref={ref} isPriority>
      {Object.values(CARD_PRIORITY).map(({ value, color }) => (
        <PriorityItemBtn key={value} type="button">
          <ColorText text={value} color={color} isFullWidth />
        </PriorityItemBtn>
      ))}
    </Dropdown>
  );
});
