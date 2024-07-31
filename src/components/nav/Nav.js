import styles from "./Nav.module.sass";
import Grid from "../entries/grid/Grid";

export default function Nav(props) {
  return (
    <nav>
      <Grid isWrapped={true}>
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
      </Grid>
    </nav>
  );
}
