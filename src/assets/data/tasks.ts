import { ICardProps } from '@/components/ui';
import { CARD_PRIORITY, CARD_STATUS } from '@/utils';

export const tasksData: ICardProps[][] = [
  [
    {
      id: 1,
      title: 'UI/UX Design in the age of Blog Copywriting UI/UX Design UI/UX Design',
      desc: `Lorem ipsum dolor sit amet, libre unst consectetur adispicing elit. 
        Lorem ipsum dolor sit amet, libre unst consectetur adispicing elit.`,
      priority: CARD_PRIORITY.critical,
      status: CARD_STATUS.toDo,
    },
    {
      id: 2,
      title: 'Blog Copywriting',
      desc: 'Lorem ipsum dolor sit amet, libre unst consectetur adispicing elit.',
      priority: CARD_PRIORITY.null,
      status: CARD_STATUS.toDo,
    },
  ],
  [
    {
      id: 3,
      title: 'User flow confirmation for finance app',
      desc: 'Lorem ipsum dolor sit amet, libre unst consectetur adispicing elit.',
      priority: CARD_PRIORITY.high,
      status: CARD_STATUS.inProgress,
    },
    {
      id: 4,
      title: 'Healthcare app wireframe flow',
      desc: 'Lorem ipsum dolor sit amet, libre unst consectetur adispicing elit.',
      priority: CARD_PRIORITY.null,
      status: CARD_STATUS.inProgress,
    },
  ],
  [
    {
      id: 5,
      title: 'UI/UX Design in the age of AI',
      desc: 'Lorem ipsum dolor sit amet, libre unst consectetur adispicing elit.',
      priority: CARD_PRIORITY.low,
      status: CARD_STATUS.done,
    },
    {
      id: 6,
      title: 'UI/UX Design in the age of AI',
      desc: 'Lorem ipsum dolor sit amet, libre unst consectetur adispicing elit.',
      priority: CARD_PRIORITY.normal,
      status: CARD_STATUS.done,
    },
    {
      id: 7,
      title: 'UI/UX Design in the age of AI',
      desc: 'Lorem ipsum dolor sit amet, libre unst consectetur adispicing elit.',
      priority: CARD_PRIORITY.critical,
      status: CARD_STATUS.done,
    },
  ],
];
