import styles from "./SideBar.module.css";
import mainIconImg from "../../assets/ illustration/main-logo.svg";
import homeIconImg from "../../assets/ illustration/home.png";
import compassIconImg from "../../assets/ illustration/compass.png";
import musicIconImg from "../../assets/ illustration/music.png";

const SideBar = () => {
  return (
    <div className={styles.SideBar}>
      <div className={styles.mainLogo}>
        <img src={mainIconImg} alt="메인아이콘" />
      </div>
      <div className={styles.buttons}>
        <div className={`${styles.mainButton} ${styles.homeButton}`}>
          <button className={styles.test}>
            <img src={homeIconImg} alt="홈 화면 아이콘" />
            <p>홈</p>
          </button>
        </div>

        <div className={`${styles.mainButton} ${styles.compassButton}`}>
          <button>
            <img src={compassIconImg} alt="freeView아이콘" />
          </button>
        </div>

        <div className={`${styles.mainButton} ${styles.musicButton}`}>
          <img src={musicIconImg} alt="storagebox아이콘" />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
