import { IIconProps } from '../interface';

export const IconClose = ({ size = 24, color = '#475569' }: IIconProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18.364 5.636a1.5 1.5 0 0 0-2.121 0L12 9.879 7.757 5.636a1.5 1.5 0 0 0-2.121 
          2.121L9.879 12l-4.243 4.243a1.5 1.5 0 1 0 2.121 2.121L12 14.121l4.243 4.243a1.5 
          1.5 0 0 0 2.121-2.121L14.121 12l4.243-4.243a1.5 1.5 0 0 0 0-2.121Z"
        fill={color}
        stroke={color}
        strokeWidth="0.09375"
      />
    </svg>
  );
};
