interface IChildrenProps {
  children: React.ReactNode;
}

interface IIconProps {
  size?: number;
  color?: string;
}

interface IFormDataColumn {
  id: string;
  title: string;
  color: string;
}

interface IFormDataCard {
  name: string;
  description?: string;
  priority: IOption;
  columnId: string;
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
  columnId: string;
}

interface IColumn {
  id: string;
  title: string;
  color: string;
  cardIds: string[];
}

interface IKanbanData {
  columns: Record<string, IColumn>;
  cards: Record<string, ICard>;
}

export type { ICard, IChildrenProps, IColumn, IFormDataCard, IFormDataColumn, IIconProps, IKanbanData, IOption, IText };
