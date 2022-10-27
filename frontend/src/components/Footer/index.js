import "./style.css";
import linkedin from "../../assets/images/linkedin.png";

const Footer = () => {
  return (
    <footer>
      <h4>Creado por Sebastián Penas</h4>
      <a
        href="https://www.linkedin.com/in/sebasti%C3%A1n-penas-orza-9bba044b/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={linkedin} alt="Linkedin"></img>
      </a>
    </footer>
  );
};
export default Footer;
