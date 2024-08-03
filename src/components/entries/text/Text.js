import styles from "./Text.module.sass";

import PostDate from "../date/Date";

export default function Text({ title, date, body }) {
  return (
    <article>
      <div className={styles.text}>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
      <div>
        <PostDate date={date} />
      </div>
    </article>
  );
}
