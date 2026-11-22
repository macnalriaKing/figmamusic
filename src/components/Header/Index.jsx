import styles from "./Header.module.css";
import IconImg from "../../assets/ illustration/Icon.png";
import potIconImg from "../../assets/ illustration/potCast.png";
import profileImg from "../../assets/ illustration/profile.png";

const Header = () => {
  return (
    <div className={styles.Header}>
      <div className={styles.searchbar}>
        <img
          src={IconImg}
          alt="검색아이콘"
          className={styles.Icon}
          role="button"
          tabIndex={"0"}
        />
        <input
          placeholder="노래,앨범, 아티스트, 팟캐스트 검색"
          className={styles.searchText}
        />
      </div>
      <div className={styles.optionIcon}>
        <img
          className={styles.castIcon}
          src={potIconImg}
          alt="방송모드아이콘"
          role="button"
          tabIndex={"0"}
        />
        <img
          className={styles.progFile}
          src={profileImg}
          alt="유저아이콘"
          role="button"
          tabIndex={"0"}
        />
      </div>
    </div>
  );
};

export default Header;
