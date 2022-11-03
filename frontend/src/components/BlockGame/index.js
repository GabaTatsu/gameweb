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
  const [xDireccionBola, setXDireccionBola] = useState(0);
  const [yDireccionBola, setYDireccionBola] = useState(0);
  const [arrayBloques, setArrayBloques] = useState(bloques);
  const [start, setStart] = useState("Start");
  const [gameOver, setGameOver] = useState(-1);
  const [youWin, setYouWin] = useState(-1);
  const [startDisabled, setStartDisabled] = useState(false);

  useEffect(() => {
    const moverUsuario = (e) => {
      switch (e.key) {
        case "ArrowLeft":
          if (posicionActualUsuario[0] > 3) {
            posicionActualUsuario[0] -= 7;
          }
          break;
        case "ArrowRight":
          if (posicionActualUsuario[0] < anchoTablero - anchoBloque) {
            posicionActualUsuario[0] += 7;
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
      revisarColisiones();
    };

    setTimeout(moverBola, 20);
  }, [posicionActualBola]);

  const revisarColisiones = () => {
    for (let i = 0; i < arrayBloques.length; i++) {
      if (
        posicionActualBola[0] >= arrayBloques[i].ejeX - diametroBola &&
        posicionActualBola[0] <= arrayBloques[i].ejeX + anchoBloque &&
        posicionActualBola[1] >= arrayBloques[i].ejeY - diametroBola &&
        posicionActualBola[1] <=
          arrayBloques[i].ejeY + altoBloque / 2 + diametroBola / 2
      ) {
        cambiarDireccion();
        arrayBloques.splice(i, 1);
        setArrayBloques([...arrayBloques]);
      }
    }
    if (
      posicionActualBola[0] >= anchoTablero - diametroBola ||
      posicionActualBola[1] >= altoTablero - diametroBola ||
      posicionActualBola[0] <= 0
    ) {
      cambiarDireccion();
    }
    if (
      posicionActualBola[0] >= posicionActualUsuario[0] - diametroBola &&
      posicionActualBola[0] <= posicionActualUsuario[0] + anchoBloque &&
      posicionActualBola[1] <=
        posicionActualUsuario[1] + altoBloque / 2 + diametroBola / 2 &&
      posicionActualBola[1] >= posicionActualUsuario[1] - diametroBola / 2
    ) {
      cambiarDireccion();
    }
    if (posicionActualBola[1] <= 0) {
      setStart("Start");
      setXDireccionBola(0);
      setYDireccionBola(0);
      setGameOver(1);
      setStartDisabled(true);
    }
    if (arrayBloques.length <= 0) {
      setStart("Start");
      setXDireccionBola(0);
      setYDireccionBola(0);
      setYouWin(1);
      setStartDisabled(true);
    }
  };

  const cambiarDireccion = () => {
    if (xDireccionBola === 3 && yDireccionBola === 3) {
      setYDireccionBola(-3);
    }
    if (xDireccionBola === 3 && yDireccionBola === -3) {
      setXDireccionBola(-3);
    }
    if (xDireccionBola === -3 && yDireccionBola === -3) {
      setYDireccionBola(3);
    }
    if (xDireccionBola === -3 && yDireccionBola === 3) {
      setXDireccionBola(3);
    }
  };

  return (
    <div className="container">
      <div className="contenedor">
        {arrayBloques.map((bloque, index) => {
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
      <div
        style={{
          zIndex: gameOver,
        }}
        className="gameover"
      ></div>
      <div
        style={{
          zIndex: youWin,
        }}
        className="youwin"
      ></div>
      <button
        disabled={startDisabled}
        onClick={() => {
          if (start === "Start") {
            setXDireccionBola(3);
            setYDireccionBola(3);
            setStart("Pause");
          } else {
            setXDireccionBola(0);
            setYDireccionBola(0);
            setStart("Start");
          }
        }}
      >
        {start}
      </button>
      <article>
        <h3>INSTRUCTIONS</h3>
        <p>-To start the game press start button</p>
        <p>
          -If you lose or win the game you have to refresh the page to start
          again
        </p>
      </article>
    </div>
  );
};
export default BlockGame;
