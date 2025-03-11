import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { combineReducers, createStore } from 'redux';

import { menuMobReducer } from './menuMob/reducer';

const rootReducer = combineReducers({
  menuMob: menuMobReducer,
});

export const store = createStore(rootReducer);

type RootState = ReturnType<typeof rootReducer>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
