import { forwardRef } from 'react';
import { Dropdown, ItemHash } from '../ui';
import { CARD_STATUS } from '@/utils';

export const PriorityDropdown = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <Dropdown ref={ref}>
      {Object.values(CARD_STATUS).map(({ text, color }) => (
        <ItemHash key={text} text={text} color={color} />
      ))}
    </Dropdown>
  );
});
