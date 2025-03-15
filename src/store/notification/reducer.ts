import { ENotificationActions, IInitialNotificationState, TNotificationAction } from './types';

const initialNotificationState: IInitialNotificationState = {
  isOpen: false,
  isSuccess: true,
  text: '',
};

const notificationReducer = (
  state = initialNotificationState,
  action: TNotificationAction
): IInitialNotificationState => {
  switch (action.type) {
    case ENotificationActions.OPEN_NOTIFICATION:
      return {
        ...state,
        isOpen: true,
        isSuccess: action.payload.isSuccess,
        text: action.payload.text,
      };
    case ENotificationActions.CLOSE_NOTIFICATION:
      return {
        ...initialNotificationState,
      };
    default:
      return state;
  }
};

export { notificationReducer };
