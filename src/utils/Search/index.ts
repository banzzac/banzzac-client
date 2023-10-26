export const generatePos = (width: number, height: number) => {
  const randomX = Math.floor(Math.random() * width);
  const randomY = Math.floor(Math.random() * height);
  return { x: randomX, y: randomY };
};
