import { IOption } from './interfaces';

type TCardStatus = 'toDo' | 'inProgress' | 'done';

export const CARD_STATUS: Record<TCardStatus, IOption> = {
  toDo: { color: '#4F46E5', value: 'To Do' },
  inProgress: { color: '#F59E0B', value: 'In progress' },
  done: { color: '#4CAF50', value: 'Done' },
};
