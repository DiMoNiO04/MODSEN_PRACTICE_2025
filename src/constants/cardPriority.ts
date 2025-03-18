import { EColors } from './colors';
import { UITexts } from './uiTexts';

enum EPriorityName {
  NULL = 'priority-1',
  LOW = 'priority-2',
  NORMAL = 'priority-3',
  HIGH = 'priority-4',
  CRITICAL = 'priority-5',
}

interface IPriority {
  id: string;
  color: string;
  title: string;
}

const CARD_PRIORITY: Record<EPriorityName, IPriority> = {
  [EPriorityName.NULL]: { id: EPriorityName.NULL, color: EColors.LIGHT_GRAY, title: UITexts.PRIORITIES.NULL },
  [EPriorityName.LOW]: { id: EPriorityName.LOW, color: EColors.GREEN, title: UITexts.PRIORITIES.LOW },
  [EPriorityName.NORMAL]: { id: EPriorityName.NORMAL, color: EColors.BLUE, title: UITexts.PRIORITIES.NORMAL },
  [EPriorityName.HIGH]: { id: EPriorityName.HIGH, color: EColors.DEEP_ORANGE, title: UITexts.PRIORITIES.HIGH },
  [EPriorityName.CRITICAL]: { id: EPriorityName.CRITICAL, color: EColors.RED, title: UITexts.PRIORITIES.CRITICAL },
};

export { CARD_PRIORITY, EPriorityName };
