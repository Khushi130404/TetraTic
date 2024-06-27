import styles from "./Tie.module.css";

function Tie() {
  return (
    <div>
      <img src="tie.svg" className={styles.centeredImage}></img>
      <div className={styles.tie}>Tie</div>
    </div>
  );
}

export default Tie;
