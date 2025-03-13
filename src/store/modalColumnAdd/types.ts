enum EModalColumnAddActions {
  OPEN_MODAL = 'OPEN_MODAL_COLUMN_ADD',
  CLOSE_MODAL = 'CLOSE_MODAL_COLUMN_ADD',
}

interface IInitialModalColumnAddState {
  isOpen: boolean;
}

type TModalColumnAddAction = { type: EModalColumnAddActions.OPEN_MODAL } | { type: EModalColumnAddActions.CLOSE_MODAL };

export { EModalColumnAddActions };
export type { IInitialModalColumnAddState, TModalColumnAddAction };
