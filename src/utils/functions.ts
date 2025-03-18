import { UITexts } from '@/constants';

const getOpacityColor = (color: string, opacity: number): string => `${color}${opacity}`;

const getRandomColor = (): string => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

const getErrorMessage = (isSubmitted: boolean, value: string): string | undefined => {
  return isSubmitted && value.trim() === '' ? UITexts.NOTIFICATION.REQUIRED_FIELD : undefined;
};

export { getErrorMessage, getOpacityColor, getRandomColor };
