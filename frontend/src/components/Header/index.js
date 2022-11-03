import "./style.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/game-console.svg";
import logoReact from "../../assets/images/logo192.png";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="Games Web"></img>
      </Link>
      <Link to="/">
        <h1>My Games</h1>
      </Link>
      <img src={logoReact} alt="React.js"></img>
    </header>
  );
};
export default Header;
