import styles from "./ProgressBarUI.module.css";

const ProgressBarUI = ({ duration, currentTime }) => {
  return (
    <div className={styles.mainBar}>
      <div
        style={{ width: `${(Math.floor(currentTime) / duration) * 100}%` }}
        className={styles.processBar}
      ></div>
    </div>
  );
};

export default ProgressBarUI;
