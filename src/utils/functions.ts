const getOpacityColor = (color: string, opacity: number) => `${color}${opacity}`;
const getRandomColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

export { getOpacityColor, getRandomColor };
