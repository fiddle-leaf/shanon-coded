import styles from "./Photo.module.sass";
import Info from "../info/Info";
import Grid from "../grid/Grid";

export default function Photo({ title, date, source, alt, caption = "" }) {
  return (
    <article>
      {/*columns change to rows */}
      <figure className={styles.photo}>
        <Grid isRows={true} isWrapped={true}>
          <div className={styles.image}>
            <img src={source} alt={alt} />
          </div>
          <div className={styles.info}>
            <Grid isRows={false} isWrapped={false}>
              <Info title={title} date={date} />
              <div className={styles.caption}>
                <figcaption>{caption}</figcaption>
              </div>
            </Grid>
          </div>
        </Grid>
      </figure>
    </article>
  );
}
