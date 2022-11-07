import "./style.css";
import { Link } from "react-router-dom";
import blockGamePreview from "../../assets/images/BlockGamePreview.png";
import symonSaysPreview from "../../assets/images/SimonSaysPreview.png";

const Landing = () => {
  return (
    <section>
      <ul>
        <li key="1">
          <Link to="/BlockGame">
            <h3>Blocks Game</h3>
          </Link>
          <Link to="/BlockGame">
            <img src={blockGamePreview} alt="Blocks Game" />
          </Link>
        </li>
        <li key="2">
          <Link to="/SimonSays">
            <h3>Simon Says</h3>
          </Link>
          <Link to="/SimonSays">
            <img src={symonSaysPreview} alt="Symon Says Game" />
          </Link>
        </li>
      </ul>
    </section>
  );
};
export default Landing;
