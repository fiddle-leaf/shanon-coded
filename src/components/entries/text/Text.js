import styles from "./Text.module.sass";
import Grid from "../grid/Grid";
import Info from "../info/Info";

export default function Text({ title, date, body }) {
  return (
    <article>
      <Grid isRows={false} isWrapped={false}>
        <div className={styles.text}>
          <h2>{title}</h2>
          <p>{body}</p>
        </div>
        <Info date={date} />
      </Grid>
    </article>
  );
}
