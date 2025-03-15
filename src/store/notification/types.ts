enum ENotificationActions {
  OPEN_NOTIFICATION = 'OPEN_NOTIFICATION',
  CLOSE_NOTIFICATION = 'CLOSE_NOTIFICATION',
}

interface INotificationPayload {
  isSuccess: boolean;
  text: string;
}

interface IInitialNotificationState extends INotificationPayload {
  isOpen: boolean;
}

type TNotificationAction =
  | { type: ENotificationActions.OPEN_NOTIFICATION; payload: INotificationPayload }
  | { type: ENotificationActions.CLOSE_NOTIFICATION };

export { ENotificationActions };
export type { IInitialNotificationState, INotificationPayload, TNotificationAction };
