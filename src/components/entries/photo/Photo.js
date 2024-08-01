import styles from "./Photo.module.sass";
import Info from "../info/Info";

export default function Photo({ title, date, source, alt, caption = "" }) {
  return (
    <article>
      {/*columns change to rows */}
      <figure className={styles.photo}>
        <div className={styles.image}>
          <img src={source} alt={alt} />
        </div>
        <div className={styles.info}>
          <Info title={title} date={date} />
          <div className={styles.caption}>
            <figcaption>{caption}</figcaption>
          </div>
        </div>
      </figure>
    </article>
  );
}
