import { KANBAN_DATA } from '@/constants';

import { IKanbanData } from './interfaces';

class KanbanStorage {
  private LS_KEY_KANBAN: string;

  constructor() {
    this.LS_KEY_KANBAN = 'kanbanData';
  }

  getKanbanData(): IKanbanData {
    try {
      const kanbanData = localStorage.getItem(this.LS_KEY_KANBAN);
      return kanbanData ? (JSON.parse(kanbanData) as IKanbanData) : KANBAN_DATA;
    } catch (error) {
      console.error('Failed to load kanban data from LS:', error);
      return KANBAN_DATA;
    }
  }

  saveKanbanData(data: IKanbanData): void {
    try {
      localStorage.setItem(this.LS_KEY_KANBAN, JSON.stringify(data));
    } catch (error) {
      console.error('Failed to save kanban data to LS:', error);
    }
  }
}

const kanbanStorage = new KanbanStorage();

export { kanbanStorage };
