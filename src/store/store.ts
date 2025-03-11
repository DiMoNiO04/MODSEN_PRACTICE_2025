import { createStore } from 'redux';

import { menuMobReducer } from './reducer';

const store = createStore(menuMobReducer);

export default store;
