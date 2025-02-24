import { Text } from './styled';

interface IModalTitleProps {
  text: string;
}

export const ModalTitle = ({ text }: IModalTitleProps) => {
  return <Text>{text}</Text>;
};
