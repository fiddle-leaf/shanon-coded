/**
 * Info module displays information for each entry
 * props used: title, date
 */
import styles from "./Date.module.sass";
export default function PostDate({ date }) {
  let postDate = new Date(date);

  return <p className={styles.date}>{postDate.toDateString()}</p>;
}
