
import { Link } from "react-router-dom";

import styles from "./Nav.module.css";

function Nav() {
  return (
    <nav className={styles.navigation}>
      <Link to="/home">Home</Link>
      <Link to="/countries">Countries</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}

export default Nav;
