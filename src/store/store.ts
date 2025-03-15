import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { combineReducers, createStore } from 'redux';

import { kanbanBoardReducer } from './kanbanBoard/reducer';
import { menuMobReducer } from './menuMob/reducer';
import { modalColumnAddReducer } from './modalColumnAdd/reducer';
import { modalColumnEditReducer } from './modalColumnEdit/reducer';
import { modalConfirmReducer } from './modalConfirm/reducer';
import { modalTaskReducer } from './modalTask/reducer';
import { modalTaskAddReducer } from './modalTaskAdd/reducer';

const modalsReducer = combineReducers({
  modalColumnAdd: modalColumnAddReducer,
  modalColumnEdit: modalColumnEditReducer,
  modalTask: modalTaskReducer,
  modalTaskAdd: modalTaskAddReducer,
  modalConfirm: modalConfirmReducer,
});

const rootReducer = combineReducers({
  menuMob: menuMobReducer,
  modals: modalsReducer,
  kanbanBoard: kanbanBoardReducer,
});

const store = createStore(rootReducer);

type RootState = ReturnType<typeof rootReducer>;
type AppDispatch = typeof store.dispatch;

const useAppDispatch = () => useDispatch<AppDispatch>();
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export { store, useAppDispatch, useAppSelector };
