import styles from "./Win.module.css";

function Win({ winner }) {
  return (
    <div>
      <img
        src={winner === "X" ? "cross.svg" : "circle.svg"}
        className={styles.centeredImage}
      ></img>
      <br></br>
      <div className={styles.win}>Wins</div>
    </div>
  );
}

export default Win;
