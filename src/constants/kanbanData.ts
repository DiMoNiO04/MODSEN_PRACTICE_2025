import { IKanbanData } from '@/utils/interfaces';

import { CARD_PRIORITY } from './cardPriority';
import { EColors } from './colors';
import { UITexts } from './uiTexts';

// export const KANBAN_DATA: IKanbanData = {
//  columns: {
//   'column-1': { id: 'column-1', title: UITexts.STATUSES.TODO, color: EColors.BLUE, cardIds: ['card-1', 'card-2'] },
//   'column-2': { id: 'column-2', title: UITexts.STATUSES.PROGRESS, color: EColors.ORANGE, cardIds: ['card-3', 'card-4'] },
//   'column-3': { id: 'column-3', title: UITexts.STATUSES.DONE, color: EColors.GREEN, cardIds: ['card-5', 'card-6', 'card-7'] },
// },
//   cards: {
//     'card-1': {
//       id: 'card-1',
//       title: 'UI/UX Design in the age of Blog Copywriting',
//       desc: 'Lorem ipsum dolor sit amet, libre unst consectetur adispicing elit.',
//       priority: CARD_PRIORITY.critical,
//       columnId: 'column-1'
//     },
//     'card-2': {
//       id: 'card-2',
//       title: 'Blog Copywriting',
//       desc: 'Lorem ipsum dolor sit amet, libre unst consectetur adispicing elit.',
//       priority: CARD_PRIORITY.null,
//       columnId: 'column-1'
//     },
//     'card-3': {
//       id: 'card-3',
//       title: 'User flow confirmation for finance app',
//       desc: 'Lorem ipsum dolor sit amet, libre unst consectetur adispicing elit.',
//       priority: CARD_PRIORITY.high,
//       columnId: 'column-2'
//     },
//     'card-4': {
//       id: 'card-4',
//       title: 'Healthcare app wireframe flow',
//       desc: 'Lorem ipsum dolor sit amet, libre unst consectetur adispicing elit.',
//       priority: CARD_PRIORITY.null,
//       columnId: 'column-2'
//     },
//     'card-5': {
//       id: 'card-5',
//       title: 'UI/UX Design in the age of AI',
//       desc: 'Lorem ipsum dolor sit amet, libre unst consectetur adispicing elit.',
//       priority: CARD_PRIORITY.low,
//       columnId: 'column-3'
//     },
//     'card-6': {
//       id: 'card-6',
//       title: 'UI/UX Design in the age of AI',
//       desc: 'Lorem ipsum dolor sit amet, libre unst consectetur adispicing elit.',
//       priority: CARD_PRIORITY.normal,
//       columnId: 'column-3'
//     },
//     'card-7': {
//       id: 'card-7',
//       title: 'UI/UX Design in the age of AI',
//       desc: 'Lorem ipsum dolor sit amet, libre unst consectetur adispicing elit.',
//       priority: CARD_PRIORITY.critical,
//       columnId: 'column-3'
//     },
//   },
// };

export const KANBAN_DATA: IKanbanData = {
  columns: {
    'column-1': { id: 'column-1', title: UITexts.STATUSES.TODO, color: EColors.BLUE, cardIds: [] },
    'column-2': { id: 'column-2', title: UITexts.STATUSES.PROGRESS, color: EColors.ORANGE, cardIds: [] },
    'column-3': { id: 'column-3', title: UITexts.STATUSES.DONE, color: EColors.GREEN, cardIds: [] },
  },
  cards: {},
};
