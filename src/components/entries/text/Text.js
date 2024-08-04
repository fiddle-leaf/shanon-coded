import styles from "./Text.module.sass";

import PostDate from "../date/PostDate";

export default function Text({ title, date, body }) {
  return (
    <article className={styles.text}>
      <div className={styles.body}>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
      <div className={styles.date}>
        <PostDate date={date} />
      </div>
    </article>
  );
}
