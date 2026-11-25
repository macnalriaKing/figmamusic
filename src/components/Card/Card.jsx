import styles from "./index.module.css";

const Card = ({ src, title, artist }) => {
  return (
    <div className={styles.card}>
      <button>
        <img className={styles.imgOp} src={src} />
        <h3 className={styles.explainText}>{title}</h3>
        <p>{artist}</p>
      </button>
    </div>
  );
};

export default Card;
