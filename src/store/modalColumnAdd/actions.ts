import { EModalColumnAddActions } from './types';

const openModaColumnAdd = () => ({
  type: EModalColumnAddActions.OPEN_MODAL,
});

const closeModaColumnAdd = () => ({
  type: EModalColumnAddActions.CLOSE_MODAL,
});

export { closeModaColumnAdd, EModalColumnAddActions, openModaColumnAdd };
