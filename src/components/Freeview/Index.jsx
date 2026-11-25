import styles from "./FreeView.module.css";
import MusicIcon from "../../assets/music.svg";
import ChartIcon from "../../assets/chart.svg";
import SmileIcon from "../../assets/smile.svg";
import firstMusic from "../../assets/ illustration/50meru - Vega.jpeg";
import secondMusic from "../../assets/ illustration/CattyBGM - 고양이 코.jpeg";
import thirdMusic from "../../assets/ illustration/ClearnEars - Christmas.jpeg";
import fourthMusic from "../../assets/ illustration/daldam music - 차.jpeg";
import upIcon from "../../assets/ illustration/up.svg";
import downIcon from "../../assets/ illustration/down.svg";
import aldebaran from "../../assets/ illustration/50meru - aldebaran.jpeg";
import Canopus from "../../assets/ illustration/50meru - Canopus.jpeg";
import fire from "../../assets/ illustration/CattyBGM - 불 붙인 양초.jpeg";
import socks from "../../assets/ illustration/CattyBGM - 신난 양말.jpeg";
import Card from "../Card/Card";
import CardList from "../CardList/CardList";

const FreeView = () => {
  const NEW_ALBUM = [
    {
      src: firstMusic,
      title: "50meru's playlist",
      artist: "50meru - 트랙 4",
    },
    {
      src: secondMusic,
      title: "CattyBGM's playlist",
      artist: "CattyBGM - 트랙 4",
    },
    {
      src: thirdMusic,
      title: "ClearnEars's playlist ears",
      artist: "ClearnEars - 트랙 2",
    },
    {
      src: fourthMusic,
      title: "daldam's playlist music",
      artist: "daldam music - 트랙 4",
    },
  ];

  const FAMOUS_SONG = [
    {
      src: Canopus,
      course: downIcon,
      num: 1,
      title: "Canopus",
    },
    {
      src: firstMusic,
      course: downIcon,
      num: 2,
      title: "vega",
    },
    {
      src: aldebaran,
      course: upIcon,
      num: 3,
      title: "aldebaran",
    },
    {
      src: fire,
      course: upIcon,
      num: 4,
      title: "불 붙인 양초",
    },
    {
      src: socks,
      course: upIcon,
      num: 5,
      title: "신난 양말",
    },
    {
      src: secondMusic,
      course: upIcon,
      num: 6,
      title: "고양이 코",
    },
  ];
  const FIRST_LIST = FAMOUS_SONG.slice(0, 3);
  const SECOND_LIST = FAMOUS_SONG.slice(3, 6);

  const handleClickNew = (album) => {
    console.log(album);
  };
  return (
    <div className={styles.freeViewOp}>
      <div className={styles.menuButton}>
        <button>
          <img src={MusicIcon} alt="음표아이콘" />
          <p>최신음악</p>
        </button>
        <button>
          <img src={ChartIcon} alt="차트아이콘" />
          <p>차트</p>
        </button>
        <button>
          <img src={SmileIcon} alt="웃음아이콘" />
          <p>분위기 및 장르</p>
        </button>
      </div>
      <div className={styles.totalObj}>
        <p className={styles.mainTitle}>새 앨범 및 싱글</p>
        <div className={styles.track}>
          <CardList cardList={NEW_ALBUM} />
        </div>
      </div>
      <div className={styles.footer}>
        <p className={styles.mainTitle}>인기곡</p>
        <div className={styles.mainList}>
          <div className={styles.famousList}>
            {FIRST_LIST.map((famous) => (
              <div className={styles.left}>
                <img className={styles.sumNail} src={famous.src} />{" "}
                <img src={famous.course} />
                <p>{famous.num}</p>
                <p>{famous.title}</p>
              </div>
            ))}
          </div>
          <div className={styles.famousList}>
            {SECOND_LIST.map((sec) => (
              <div className={styles.left}>
                <img className={styles.sumNail} src={sec.src} />{" "}
                <img src={sec.course} />
                <p>{sec.num}</p>
                <p>{sec.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeView;
