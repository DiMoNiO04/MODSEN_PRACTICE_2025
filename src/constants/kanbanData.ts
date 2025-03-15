import { IKanbanData } from '@/utils/interfaces';

import { EColors } from './colors';
import { UITexts } from './uiTexts';

export const KANBAN_DATA: IKanbanData = {
  columns: {
    'column-1': { id: 'column-1', title: UITexts.STATUSES.TODO, color: EColors.BLUE, cardIds: [] },
    'column-2': { id: 'column-2', title: UITexts.STATUSES.PROGRESS, color: EColors.ORANGE, cardIds: [] },
    'column-3': { id: 'column-3', title: UITexts.STATUSES.DONE, color: EColors.GREEN, cardIds: [] },
  },
  cards: {},
};
