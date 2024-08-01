import styles from "./Nav.module.sass";

export default function Nav(props) {
  return (
    <nav className={styles.links}>
      <span>
        <a>Home</a>
      </span>
      <span>
        <a>About</a>
      </span>
      <span>
        <a>Instagram</a>
      </span>
      <span>
        <a>Linkedin</a>
      </span>
      <span>
        <a>Github</a>
      </span>
    </nav>
  );
}
