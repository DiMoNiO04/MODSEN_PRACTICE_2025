import { IOption } from '@/utils';

import { EColors } from './colors';
import { UITexts } from './uiTexts';

type TCardStatus = 'toDo' | 'inProgress' | 'done';

export const CARD_STATUS: Record<TCardStatus, IOption> = {
  toDo: { color: EColors.BLUE, value: UITexts.STATUSES.TODO },
  inProgress: { color: EColors.ORANGE, value: UITexts.STATUSES.PROGRESS },
  done: { color: EColors.GREEN, value: UITexts.STATUSES.DONE },
};
