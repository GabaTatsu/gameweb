import { useEffect, useState } from "react";
import bloques from "../../db/blocks";
import Block from "../Block";
import "./style.css";

const BlockGame = () => {
  const altoTablero = 300;
  const anchoTablero = 570;
  const altoBloque = 20;
  const anchoBloque = 100;
  const diametroBola = 20;
  const [posicionActualUsuario, setPosicionActualUsuario] = useState([230, 10]);
  const [posicionActualBola, setPosicionActualBola] = useState([270, 40]);
  const [xDireccionBola, setXDireccionBola] = useState(2);
  const [yDireccionBola, setYDireccionBola] = useState(2);
  console.log(xDireccionBola, yDireccionBola);

  useEffect(() => {
    const moverUsuario = (e) => {
      switch (e.key) {
        case "ArrowLeft":
          if (posicionActualUsuario[0] > 3) {
            posicionActualUsuario[0] -= 10;
          }
          break;
        case "ArrowRight":
          if (posicionActualUsuario[0] < anchoTablero - anchoBloque) {
            posicionActualUsuario[0] += 10;
          }
          break;
        default:
          return null;
      }
      setPosicionActualUsuario([...posicionActualUsuario]);
    };
    document.addEventListener("keydown", moverUsuario);
  }, []);

  useEffect(() => {
    const moverBola = () => {
      posicionActualBola[0] += xDireccionBola;
      posicionActualBola[1] += yDireccionBola;

      setPosicionActualBola([...posicionActualBola]);
    };
    revisarColisiones();
    setInterval(moverBola, 20);
  }, []);

  const revisarColisiones = () => {
    if (
      posicionActualBola[0] >= anchoTablero - diametroBola ||
      posicionActualBola[1] >= altoTablero - diametroBola ||
      posicionActualBola[0] <= diametroBola ||
      posicionActualBola[1] <= diametroBola
    ) {
      if (xDireccionBola === 2 && yDireccionBola === 2) {
        setYDireccionBola(-2);
      }
      if (xDireccionBola === 2 && yDireccionBola === -2) {
        setXDireccionBola(-2);
      }
      if (xDireccionBola === -2 && yDireccionBola === -2) {
        setYDireccionBola(2);
      }
      if (xDireccionBola === -2 && yDireccionBola === 2) {
        setXDireccionBola(2);
      }
    }
  };

  return (
    <div className="container">
      <div className="contenedor">
        {bloques.map((bloque, index) => {
          return (
            <Block
              ejeX={bloque.ejeX}
              ejeY={bloque.ejeY}
              key={index}
              backgroundColor={bloque.backgroundColor}
            />
          );
        })}
        <div
          className="usuario"
          style={{
            left: posicionActualUsuario[0],
            bottom: posicionActualUsuario[1],
          }}
        ></div>
        <div
          className="bola"
          style={{
            left: posicionActualBola[0],
            bottom: posicionActualBola[1],
          }}
        ></div>
      </div>
    </div>
  );
};
export default BlockGame;
