const getOpacityColor = (color: string, opacity: number): string => `${color}${opacity}`;
const getRandomColor = (): string => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

export { getOpacityColor, getRandomColor };
