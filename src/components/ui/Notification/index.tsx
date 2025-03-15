import { useEffect } from 'react';

import { closeNotification } from '@/store/notification/actions';
import { useAppDispatch, useAppSelector } from '@/store/store';

import { Block, ImageIcon, Text } from './styled';

const TIME_ANIMATION: number = 4200;

export const Notification = () => {
  const dispatch = useAppDispatch();
  const { isOpen, isSuccess, text } = useAppSelector(({ notification }) => notification);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        dispatch(closeNotification());
      }, TIME_ANIMATION);

      return () => clearTimeout(timer);
    }
  }, [isOpen, dispatch]);

  if (!isOpen) return null;

  return (
    <Block $isSuccess={isSuccess}>
      <ImageIcon src={isSuccess ? '/icons/success.svg' : '/icons/error.svg'} alt="" />
      <Text $isSuccess={isSuccess}>{text}</Text>
    </Block>
  );
};
