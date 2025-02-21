import { ICardProps } from '@/components/ui';
import { CARD_PRIORITY } from '@/utils';

export const tasksData: ICardProps[][] = [
  [
    {
      id: 1,
      title: 'UI/UX Design in the age of Blog Copywriting UI/UX Design UI/UX Design',
      desc: `Lorem ipsum dolor sit amet, libre unst consectetur adispicing elit. 
        Lorem ipsum dolor sit amet, libre unst consectetur adispicing elit.`,
      priority: CARD_PRIORITY.critical,
    },
    {
      id: 2,
      title: 'Blog Copywriting',
      desc: 'Lorem ipsum dolor sit amet, libre unst consectetur adispicing elit.',
      priority: CARD_PRIORITY.null,
    },
  ],
  [
    {
      id: 3,
      title: 'User flow confirmation for finance app',
      desc: 'Lorem ipsum dolor sit amet, libre unst consectetur adispicing elit.',
      priority: CARD_PRIORITY.high,
    },
    {
      id: 4,
      title: 'Healthcare app wireframe flow',
      desc: 'Lorem ipsum dolor sit amet, libre unst consectetur adispicing elit.',
      priority: CARD_PRIORITY.null,
    },
  ],
  [
    {
      id: 5,
      title: 'UI/UX Design in the age of AI',
      desc: 'Lorem ipsum dolor sit amet, libre unst consectetur adispicing elit.',
      priority: CARD_PRIORITY.low,
    },
    {
      id: 6,
      title: 'UI/UX Design in the age of AI',
      desc: 'Lorem ipsum dolor sit amet, libre unst consectetur adispicing elit.',
      priority: CARD_PRIORITY.normal,
    },
    {
      id: 7,
      title: 'UI/UX Design in the age of AI',
      desc: 'Lorem ipsum dolor sit amet, libre unst consectetur adispicing elit.',
      priority: CARD_PRIORITY.critical,
    },
  ],
];
