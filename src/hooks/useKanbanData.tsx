import { useEffect, useState } from 'react';

import { kanbanStorage } from '@/utils';
import { IKanbanData } from '@/utils/interfaces';

export const useKanbanData = (): IKanbanData => {
  const [kanbanData] = useState<IKanbanData>(kanbanStorage.getKanbanData());

  useEffect(() => {
    kanbanStorage.saveKanbanData(kanbanData);
  }, [kanbanData]);

  return kanbanData;
};
