import { EModalColumnAddActions, TModalColumnAddAction } from './types';

const openModaColumnAdd = (): TModalColumnAddAction => ({
  type: EModalColumnAddActions.OPEN_MODAL,
});

const closeModaColumnAdd = (): TModalColumnAddAction => ({
  type: EModalColumnAddActions.CLOSE_MODAL,
});

export { closeModaColumnAdd, EModalColumnAddActions, openModaColumnAdd };
