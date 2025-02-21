import { forwardRef } from 'react';
import { CARD_PRIORITY } from '@/utils';
import { Dropdown, ColorText } from '../ui';
import { PriorityItemBtn } from './styled';

export const PriorityDropdown = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <Dropdown ref={ref} isPriority>
      {Object.values(CARD_PRIORITY).map(({ text, color }) => (
        <PriorityItemBtn key={text} type="button">
          <ColorText text={text} color={color} isFullWidth />
        </PriorityItemBtn>
      ))}
    </Dropdown>
  );
});
