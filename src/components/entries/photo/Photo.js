import styles from "./Photo.module.sass";

import PostDate from "../date/PostDate";

export default function Photo({ title, date, source, alt, caption = "" }) {
  return (
    <figure className={styles.photo}>
      <div className={styles.image}>
        <img src={source} alt={alt} />
      </div>
      <div className={styles.info}>
        <div className={styles.details}>
          <h2>{title}</h2>
          <PostDate date={date} />
        </div>
        <div className={styles.caption}>
          <figcaption>{caption}</figcaption>
        </div>
      </div>
    </figure>
  );
}
