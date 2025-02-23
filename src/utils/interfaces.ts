import { ICardPriority } from './cardPriority';

interface IChildrenProps {
  children: React.ReactNode;
}

interface IModalCloseProps {
  onClose: () => void;
}

interface IIconProps {
  size?: number;
  color?: string;
}

interface IFormDataColumn {
  name: string;
  color?: string;
}

interface IFormDataTask {
  name: string;
  description?: string;
  priority: ICardPriority;
}

export type { IChildrenProps, IModalCloseProps, IIconProps, IFormDataColumn, IFormDataTask };
