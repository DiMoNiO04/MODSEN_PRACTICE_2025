import { IIconProps } from '..';

export const IconMaximize = ({ size = 24, color = '#475569' }: IIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M4 4h6v6H4z" />
      <path d="M16 4h4v4h-4z" />
      <path d="M4 16h6v4H4z" />
      <path d="M16 16h4v4h-4z" />
    </svg>
  );
};
