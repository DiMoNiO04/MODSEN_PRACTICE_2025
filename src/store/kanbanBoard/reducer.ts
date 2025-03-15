import { kanbanStorage } from '@/utils';

import { EKanbanBoardActions, IInitialKanbanBoardState, TKanbanBoardAction } from './types';

const initialKanbanBoardData: IInitialKanbanBoardState = {
  kanbanData: kanbanStorage.getKanbanData(),
};

const kanbanBoardReducer = (state = initialKanbanBoardData, action: TKanbanBoardAction): IInitialKanbanBoardState => {
  switch (action.type) {
    case EKanbanBoardActions.SET_DATA: {
      kanbanStorage.saveKanbanData(action.payload);
      return {
        ...state,
        kanbanData: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export { kanbanBoardReducer };
