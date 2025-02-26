import { IOption } from '@/utils';

import { EColors } from './colors';

type TCardPriority = 'null' | 'low' | 'normal' | 'high' | 'critical';

export const CARD_PRIORITY: Record<TCardPriority, IOption> = {
  null: { color: EColors.LIGHT_GRAY, value: '—' },
  low: { color: EColors.GREEN, value: 'Low' },
  normal: { color: EColors.BLUE, value: 'Normal' },
  high: { color: EColors.DEEP_ORANGE, value: 'High' },
  critical: { color: EColors.RED, value: 'Critical' },
};
