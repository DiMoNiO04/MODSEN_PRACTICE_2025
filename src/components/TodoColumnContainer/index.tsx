import { IChildrenProps } from '@/utils';
import { TodoColumnContainerBlock } from './styled';

interface ITodoColumnContainer extends IChildrenProps {
  isFullHeight?: boolean;
}

export const TodoColumnContainer = ({ children, isFullHeight = true }: ITodoColumnContainer) => {
  return <TodoColumnContainerBlock $isFullHeight={isFullHeight}>{children}</TodoColumnContainerBlock>;
};
