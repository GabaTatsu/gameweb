import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <section>
      <ul>
        <li key="1">
          <h3>Blocks Game</h3>
          <Link to="/BlockGame">
            <p>BlockGame</p>
          </Link>
        </li>
      </ul>
    </section>
  );
};
export default Landing;
