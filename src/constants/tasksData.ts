import { IKanbanData } from '@/utils/interfaces';

import { CARD_PRIORITY } from './cardPriority';
import { CARD_STATUS } from './cardStatus';

export const TASKS_DATA: IKanbanData = {
  columns: {
    'column-1': { id: 'column-1', status: CARD_STATUS.toDo, cardIds: ['card-1', 'card-2'] },
    'column-2': { id: 'column-2', status: CARD_STATUS.inProgress, cardIds: ['card-3', 'card-4'] },
    'column-3': { id: 'column-3', status: CARD_STATUS.done, cardIds: ['card-5', 'card-6', 'card-7'] },
  },
  cards: {
    'card-1': {
      id: 'card-1',
      title: 'UI/UX Design in the age of Blog Copywriting',
      desc: 'Lorem ipsum dolor sit amet, libre unst consectetur adispicing elit.',
      priority: CARD_PRIORITY.critical,
      status: CARD_STATUS.toDo,
    },
    'card-2': {
      id: 'card-2',
      title: 'Blog Copywriting',
      desc: 'Lorem ipsum dolor sit amet, libre unst consectetur adispicing elit.',
      priority: CARD_PRIORITY.null,
      status: CARD_STATUS.toDo,
    },
    'card-3': {
      id: 'card-3',
      title: 'User flow confirmation for finance app',
      desc: 'Lorem ipsum dolor sit amet, libre unst consectetur adispicing elit.',
      priority: CARD_PRIORITY.high,
      status: CARD_STATUS.inProgress,
    },
    'card-4': {
      id: 'card-4',
      title: 'Healthcare app wireframe flow',
      desc: 'Lorem ipsum dolor sit amet, libre unst consectetur adispicing elit.',
      priority: CARD_PRIORITY.null,
      status: CARD_STATUS.inProgress,
    },
    'card-5': {
      id: 'card-5',
      title: 'UI/UX Design in the age of AI',
      desc: 'Lorem ipsum dolor sit amet, libre unst consectetur adispicing elit.',
      priority: CARD_PRIORITY.low,
      status: CARD_STATUS.done,
    },
    'card-6': {
      id: 'card-6',
      title: 'UI/UX Design in the age of AI',
      desc: 'Lorem ipsum dolor sit amet, libre unst consectetur adispicing elit.',
      priority: CARD_PRIORITY.normal,
      status: CARD_STATUS.done,
    },
    'card-7': {
      id: 'card-7',
      title: 'UI/UX Design in the age of AI',
      desc: 'Lorem ipsum dolor sit amet, libre unst consectetur adispicing elit.',
      priority: CARD_PRIORITY.critical,
      status: CARD_STATUS.done,
    },
  },
};
