import styles from "./About.module.sass";

export default function About(props) {
  return (
    <div className={styles.about}>
      <div>{/*image here*/}</div>
      <div>
        <p>Hi! I'm Shanon. </p>
        <p>Welcome to my space! ;)</p>
      </div>
    </div>
  );
}
