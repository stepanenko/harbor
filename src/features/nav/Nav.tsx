
import { Link } from "react-router-dom";

import styles from "./Nav.module.css";

function Nav() {
  return (
    <nav className={styles.navigation}>
      <Link to="/home">Home</Link>
      <Link to="/counter">Counter</Link>
    </nav>
  );
}

export default Nav;
