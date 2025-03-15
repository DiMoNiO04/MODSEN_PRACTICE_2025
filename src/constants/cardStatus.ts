import { IOption } from '@/utils';

import { EColors } from './colors';
import { UITexts } from './uiTexts';

export const CARD_STATUS: Record<string, IOption> = {
  'column-1': { id: 'column-1', color: EColors.BLUE, title: UITexts.STATUSES.TODO },
  'column-2': { id: 'column-2', color: EColors.ORANGE, title: UITexts.STATUSES.PROGRESS },
  'column-3': { id: 'column-3', color: EColors.GREEN, title: UITexts.STATUSES.DONE },
};
