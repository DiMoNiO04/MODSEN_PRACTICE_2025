interface IChildrenProps {
  children: React.ReactNode;
}

interface IIconProps {
  size?: number;
  color?: string;
}

interface IFormDataColumn {
  id: string;
  name: string;
  color: string;
}

interface IFormDataTask {
  name: string;
  description?: string;
  priority: IOption;
  status: IOption;
}

interface IOption {
  color: string;
  value: string;
}

interface IText {
  text: string;
}

interface ICard {
  id: string;
  title: string;
  desc: string;
  priority: IOption;
  status: IOption;
}

interface IColumn {
  id: string;
  status: IOption;
  cardIds: string[];
}

interface IKanbanData {
  columns: Record<string, IColumn>;
  cards: Record<string, ICard>;
}

export type { ICard, IChildrenProps, IColumn, IFormDataColumn, IFormDataTask, IIconProps, IKanbanData, IOption, IText };
