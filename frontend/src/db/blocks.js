const generateRandomColor = () => {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
};
const bloques = [
  { ejeX: 10, ejeY: 250, backgroundColor: generateRandomColor() },
  { ejeX: 120, ejeY: 250, backgroundColor: generateRandomColor() },
  { ejeX: 230, ejeY: 250, backgroundColor: generateRandomColor() },
  { ejeX: 340, ejeY: 250, backgroundColor: generateRandomColor() },
  { ejeX: 450, ejeY: 250, backgroundColor: generateRandomColor() },
  { ejeX: 10, ejeY: 220, backgroundColor: generateRandomColor() },
  { ejeX: 120, ejeY: 220, backgroundColor: generateRandomColor() },
  { ejeX: 230, ejeY: 220, backgroundColor: generateRandomColor() },
  { ejeX: 340, ejeY: 220, backgroundColor: generateRandomColor() },
  { ejeX: 450, ejeY: 220, backgroundColor: generateRandomColor() },
  { ejeX: 10, ejeY: 190, backgroundColor: generateRandomColor() },
  { ejeX: 120, ejeY: 190, backgroundColor: generateRandomColor() },
  { ejeX: 230, ejeY: 190, backgroundColor: generateRandomColor() },
  { ejeX: 340, ejeY: 190, backgroundColor: generateRandomColor() },
  { ejeX: 450, ejeY: 190, backgroundColor: generateRandomColor() },
];
export default bloques;
