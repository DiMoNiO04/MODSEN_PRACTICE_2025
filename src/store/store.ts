import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { combineReducers, createStore } from 'redux';

import { kanbanBoardReducer } from './kanbanBoard/reducer';
import { menuMobReducer } from './menuMob/reducer';
import { modalColumnAddReducer } from './modalColumnAdd/reducer';
import { modalColumnDeleteReducer } from './modalColumnDelete/reducer';
import { modalColumnEditReducer } from './modalColumnEdit/reducer';
import { modalTaskReducer } from './modalTask/reducer';
import { modalTaskAddReducer } from './modalTaskAdd/reducer';
import { notificationReducer } from './notification/reducer';

const modalsReducer = combineReducers({
  modalColumnAdd: modalColumnAddReducer,
  modalColumnEdit: modalColumnEditReducer,
  modalColumnDelete: modalColumnDeleteReducer,
  modalTask: modalTaskReducer,
  modalTaskAdd: modalTaskAddReducer,
});

const rootReducer = combineReducers({
  menuMob: menuMobReducer,
  modals: modalsReducer,
  kanbanBoard: kanbanBoardReducer,
  notification: notificationReducer,
});

const store = createStore(rootReducer);

type RootState = ReturnType<typeof rootReducer>;
type AppDispatch = typeof store.dispatch;

const useAppDispatch = () => useDispatch<AppDispatch>();
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type { AppDispatch };
export { store, useAppDispatch, useAppSelector };
