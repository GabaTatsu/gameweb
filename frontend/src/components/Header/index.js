import "./style.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/game-console.svg";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="Games Web"></img>
      </Link>
      <Link to="/">
        <h1>My Games</h1>
      </Link>
    </header>
  );
};
export default Header;
