import styles from "./Nav.module.sass";

export default function Nav(props) {
  return (
    <nav className={styles.nav}>
      <h3 className={styles.title}>Getting around:</h3>
      <ul className={styles.links}>
        <li>
          <a href="/" alt="home-link">
            Home
          </a>
        </li>
        <li>
          <a href="/about" alt="about-me">
            About
          </a>
        </li>
        <li>
          <a href="/">Instagram</a>
        </li>
        <li>
          <a href="/">Linkedin</a>
        </li>
        <li>
          <a href="/">Github</a>
        </li>
      </ul>
    </nav>
  );
}
