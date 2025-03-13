interface IChildrenProps {
  children: React.ReactNode;
}

interface IIconProps {
  size?: number;
  color?: string;
}

interface IFormDataColumn {
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

export type { IChildrenProps, IFormDataColumn, IFormDataTask, IIconProps, IOption, IText };
