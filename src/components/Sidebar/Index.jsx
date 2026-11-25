import styles from "./SideBar.module.css";
import mainIconImg from "../../assets/ illustration/main-logo.svg";
import homeIconImg from "../../assets/ illustration/home.png";
import compassIconImg from "../../assets/ illustration/compass.png";
import musicIconImg from "../../assets/ illustration/music.png";
import plusIconImg from "../../assets/ illustration/plus.svg";

export const SideBar = ({ activeTab, onSelectTab }) => {
  return (
    <div className={styles.SideBar}>
      <div className={styles.mainLogo}>
        <img src={mainIconImg} alt="메인아이콘" />
      </div>
      <div className={styles.buttons}>
        <div className={`${styles.mainButton} ${styles.homeButton}`}>
          <button
            className={styles.textAndIcon}
            onClick={() => onSelectTab("home")}
            aria-pressed={activeTab === "home"}
          >
            <img src={homeIconImg} alt="홈 화면 아이콘" />
            <p>홈</p>
          </button>
        </div>

        <div className={`${styles.mainButton} ${styles.compassButton}`}>
          <button
            className={styles.textAndIcon}
            onClick={() => onSelectTab("freeView")}
            aria-pressed={activeTab === "freeView"}
          >
            <img src={compassIconImg} alt="freeView아이콘" />
            <p>둘러보기</p>
          </button>
        </div>

        <div className={`${styles.mainButton} ${styles.musicButton}`}>
          <button
            className={styles.textAndIcon}
            onClick={() => onSelectTab("storageBox")}
            aria-pressed={activeTab === "storageBox"}
          >
            <img src={musicIconImg} alt="storagebox아이콘" />
            <p>보관함</p>
          </button>
        </div>
      </div>
      <div className={styles.section2}>
        <button className={styles.history}>
          <img src={plusIconImg} alt="플러스 아이콘" />
          <p className={styles.historyText}>새 재생목록</p>
        </button>
      </div>
      <div className={styles.playlist}>
        <button className={styles.playlistObj}>
          <p className={styles.section3mainstxt}>50meru's playlist</p>
          <p className={styles.section3subtxt}>50meru</p>
        </button>
        <button className={styles.playlistObj}>
          <p className={styles.section3mainstxt}>CattyBGM's playlist</p>
          <p className={styles.section3subtxt}>CattyBGM</p>
        </button>
        <button className={styles.playlistObj}>
          <p className={styles.section3mainstxt}>ClearnEars's playlist ears</p>
          <p className={styles.section3subtxt}>ClearnEars</p>
        </button>
        <button className={styles.playlistObj}>
          <p className={styles.section3mainstxt}>daldam's playlist music</p>
          <p className={styles.section3subtxt}>daldam music</p>
        </button>
        <button className={styles.playlistObj}>
          <p className={styles.section3mainstxt}>dodo's playlist music</p>
          <p className={styles.section3subtxt}>도도</p>
        </button>
      </div>
    </div>
  );
};
