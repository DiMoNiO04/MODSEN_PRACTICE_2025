import { IOption } from '@/utils';

import { EColors } from './colors';

type TCardStatus = 'toDo' | 'inProgress' | 'done';

export const CARD_STATUS: Record<TCardStatus, IOption> = {
  toDo: { color: EColors.BLUE, value: 'To Do' },
  inProgress: { color: EColors.ORANGE, value: 'In progress' },
  done: { color: EColors.GREEN, value: 'Done' },
};
