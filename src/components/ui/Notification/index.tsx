import { Block, ImageIcon, Text } from './styled';

interface INotificationProps {
  text: string;
  isSuccess?: boolean;
}

export const Notification = ({ text, isSuccess = false }: INotificationProps) => {
  return (
    <Block $isSuccess={isSuccess}>
      <ImageIcon src={isSuccess ? '/icons/success.svg' : '/icons/error.svg'} alt="" />
      <Text $isSuccess={isSuccess}>{text}</Text>
    </Block>
  );
};
