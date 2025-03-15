import { EColors } from './colors';
import { UITexts } from './uiTexts';

interface IPriority {
  id: string;
  color: string;
  title: string;
}

export const CARD_PRIORITY: Record<string, IPriority> = {
  'priority-1': { id: 'priority-1', color: EColors.LIGHT_GRAY, title: UITexts.PRIORITIES.NULL },
  'priority-2': { id: 'priority-2', color: EColors.GREEN, title: UITexts.PRIORITIES.LOW },
  'priority-3': { id: 'priority-3', color: EColors.BLUE, title: UITexts.PRIORITIES.NORMAL },
  'priority-4': { id: 'priority-4', color: EColors.DEEP_ORANGE, title: UITexts.PRIORITIES.HIGH },
  'priority-5': { id: 'priority-5', color: EColors.RED, title: UITexts.PRIORITIES.CRITICAL },
};
