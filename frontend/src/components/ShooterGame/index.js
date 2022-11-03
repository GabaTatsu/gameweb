import ShooterPlayer from "../ShooterPlayer";
import "./style.css";
import { useEffect, useState } from "react";
import ShooterProyectile from "../ShooterProyectile";

const ShooterGame = () => {
  const [ejePlayer, setEjePlayer] = useState([20, -80]);
  const [ejeProyectile, setEjeProyectile] = useState([220, -80]);
  const [proyectileDelete, setProyectileDelete] = useState(false);
  const proyectileSpeed = 3;
  const speedY = 3;

  useEffect(() => {
    const moverUsuario = (e) => {
      if (e.key === "ArrowUp" && ejePlayer[1] <= 0) {
        ejePlayer[1] += speedY;
      } else if (e.key === "ArrowDown" && ejePlayer[1] >= -300) {
        ejePlayer[1] -= speedY;
      } else {
        return null;
      }
      setEjePlayer([...ejePlayer]);
    };
    document.addEventListener("keydown", moverUsuario);
  }, []);

  return (
    <section id="canvas1">
      <ShooterPlayer ejeX={ejePlayer[0]} ejeY={ejePlayer[1]} />
      <ShooterProyectile ejeX={ejeProyectile[0]} ejeY={ejeProyectile[1]} />
    </section>
  );
};
export default ShooterGame;
