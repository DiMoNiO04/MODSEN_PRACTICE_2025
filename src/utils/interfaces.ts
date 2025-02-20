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

export type { IChildrenProps, IModalCloseProps, IIconProps };
