import CardList from "../CardList/CardList";
import styles from "./StorageBox.module.css";
import firstMusic from "../../assets/ illustration/50meru - Vega.jpeg";
import secondMusic from "../../assets/ illustration/CattyBGM - 고양이 코.jpeg";
import thirdMusic from "../../assets/ illustration/ClearnEars - Christmas.jpeg";
import fourthMusic from "../../assets/ illustration/daldam music - 차.jpeg";

const StorageBox = () => {
  const STORAGE_MUSIC = [
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
  return (
    <div className={styles.storageList}>
      <div className={styles.buttons}>
        <button>
          <p>재생목록</p>
        </button>
        <button>
          <p>팟캐스트</p>
        </button>
        <button>
          <p>노래</p>
        </button>
        <button>
          <p>앨범</p>
        </button>
        <button>
          <p>아티스트</p>
        </button>
      </div>
      <div>
        <CardList cardList={STORAGE_MUSIC} />
      </div>
      <div>
        <CardList cardList={STORAGE_MUSIC} />
      </div>
    </div>
  );
};

export default StorageBox;
