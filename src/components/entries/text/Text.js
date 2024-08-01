import styles from "./Text.module.sass";
import Info from "../info/Info";

export default function Text({ title, date, body }) {
  return (
    <article>
      <div className={styles.text}>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
      <Info date={date} />
    </article>
  );
}
