import { IKanbanData } from '@/utils/interfaces';

import { EColors } from './colors';
import { UITexts } from './uiTexts';

enum EColumnsName {
  TODO = 'column-1',
  PROGRESS = 'column-2',
  DONE = 'column-3',
}

const KANBAN_DATA: IKanbanData = {
  columns: {
    [EColumnsName.TODO]: { id: EColumnsName.TODO, title: UITexts.STATUSES.TODO, color: EColors.BLUE, taskIds: [] },
    [EColumnsName.PROGRESS]: {
      id: EColumnsName.PROGRESS,
      title: UITexts.STATUSES.PROGRESS,
      color: EColors.ORANGE,
      taskIds: [],
    },
    [EColumnsName.DONE]: { id: EColumnsName.DONE, title: UITexts.STATUSES.DONE, color: EColors.GREEN, taskIds: [] },
  },
  tasks: {},
  columnsOrder: [EColumnsName.TODO, EColumnsName.PROGRESS, EColumnsName.DONE],
};

export { EColumnsName, KANBAN_DATA };
