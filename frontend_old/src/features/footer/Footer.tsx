
import styles from './Footer.module.css';

function Footer() {
  return (
    <div className={styles.footer}>
      <span>Learn </span>
      <a
        className="App-link"
        href="https://reactjs.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        React
      </a>
      <span>, </span>
      <a
        className="App-link"
        href="https://redux.js.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Redux
      </a>
      <span>, </span>
      <a
        className="App-link"
        href="https://redux-toolkit.js.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Redux Toolkit
      </a>
      <span>, </span>
      <a
        className="App-link"
        href="https://react-redux.js.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        React Redux
      </a>
      <span> and </span>
      <a
        className="App-link"
        href="https://reactrouter.com/docs/en/v6/getting-started/overview"
        target="_blank"
        rel="noopener noreferrer"
      >
        React Router
      </a>
    </div>
  )
}

export default Footer;
