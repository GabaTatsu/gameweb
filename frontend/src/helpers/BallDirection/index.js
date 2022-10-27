const cambiarDireccion = ({ xDireccionBola, yDireccionBola }) => {
  if (xDireccionBola === 2 && yDireccionBola === 2) {
    yDireccionBola = -2;
    return { xDireccionBola, yDireccionBola };
  }
  if (xDireccionBola === 2 && yDireccionBola === -2) {
    xDireccionBola = -2;
    return { xDireccionBola, yDireccionBola };
  }
  if (xDireccionBola === -2 && yDireccionBola === -2) {
    yDireccionBola = 2;
    return { xDireccionBola, yDireccionBola };
  }
  if (xDireccionBola === -2 && yDireccionBola === 2) {
    xDireccionBola = 2;
    return { xDireccionBola, yDireccionBola };
  }
};
export default cambiarDireccion;
