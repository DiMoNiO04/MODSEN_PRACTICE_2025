import { IOption } from '@/utils';

import { EColors } from './colors';
import { UITexts } from './uiTexts';

type TCardPriority = 'null' | 'low' | 'normal' | 'high' | 'critical';

export const CARD_PRIORITY: Record<TCardPriority, IOption> = {
  null: { color: EColors.LIGHT_GRAY, value: UITexts.PRIORITIES.NULL },
  low: { color: EColors.GREEN, value: UITexts.PRIORITIES.LOW },
  normal: { color: EColors.BLUE, value: UITexts.PRIORITIES.NORMAL },
  high: { color: EColors.DEEP_ORANGE, value: UITexts.PRIORITIES.HIGH },
  critical: { color: EColors.RED, value: UITexts.PRIORITIES.CRITICAL },
};
