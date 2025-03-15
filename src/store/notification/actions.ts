import { ENotificationActions, INotificationPayload, TNotificationAction } from './types';

const openNotification = (payload: INotificationPayload): TNotificationAction => ({
  type: ENotificationActions.OPEN_NOTIFICATION,
  payload,
});

const closeNotification = (): TNotificationAction => ({
  type: ENotificationActions.CLOSE_NOTIFICATION,
});

export { closeNotification, openNotification };
