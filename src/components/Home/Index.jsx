import styles from "./Home.module.css";
import firstMusic from "../../assets/ illustration/50meru - Vega.jpeg";
import secondMusic from "../../assets/ illustration/CattyBGM - 고양이 코.jpeg";
import thirdMusic from "../../assets/ illustration/ClearnEars - Christmas.jpeg";
import fourthMusic from "../../assets/ illustration/daldam music - 차.jpeg";
import platerIcon from "../../assets/ illustration/profile.png";
import Card from "../Card/Card";
import CardList from "../CardList/CardList";

const Home = () => {
  const TAG_LIST = [
    {
      title: "운동",
      handleClick: () => {
        handleClickTag("운동");
      },
    },
    {
      title: "행복한 기분",
      handleClick: () => {
        handleClickTag("행복한 기분");
      },
    },
    {
      title: "에너지 충전",
      handleClick: () => {
        handleClickTag("에너지 충전");
      },
    },
    {
      title: "휴식",
      handleClick: () => {
        handleClickTag("휴식");
      },
    },
    {
      title: "집중",
      handleClick: () => {
        handleClickTag("집중");
      },
    },
    {
      title: "출퇴근길",
      handleClick: () => {
        handleClickTag("출퇴근길");
      },
    },
    {
      title: "로맨스",
      handleClick: () => {
        handleClickTag("로맨스");
      },
    },
    {
      title: "파티",
      handleClick: () => {
        handleClickTag("파티");
      },
    },
    {
      title: "슬픔",
      handleClick: () => {
        handleClickTag("슬픔");
      },
    },
    {
      title: "잠잘 때",
      handleClick: () => {
        handleClickTag("잠잘 때");
      },
    },
  ];

  const handleClickTag = (tag) => {
    console.log(tag);
  };
  const handleClickReplay = (rep) => {
    console.log(rep);
  };
  const REPLAY_LIST = [
    { src: firstMusic, title: "50meru's playlist", artist: "50meru-트랙4" },
    {
      src: secondMusic,
      title: "CattyBGM's playlist",
      data: "CattyBGM - 트랙 4",
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

  const NEW_ALBUM = REPLAY_LIST.slice(0, 1);

  return (
    <div className={styles.homePage}>
      <div className={styles.tag}>
        {TAG_LIST.map((tag) => (
          <button className={styles.theme} onClick={tag.handleClick}>
            <p>{tag.title}</p>
          </button>
        ))}
      </div>
      <div className={styles.playUI}>
        <img className={styles.plyerIcon} src={platerIcon} />
        <div>
          <p className={styles.subText}>도도</p>
          <p className={styles.headTitle}>다시 듣기</p>
        </div>
      </div>
      <div className={styles.replay}>
        <CardList cardList={REPLAY_LIST} />
      </div>
      <div className={styles.nowAlbum}>
        <p className={styles.subText}> 새로운 앨범</p>
        <p className={styles.headTitle}>케이시 - Full Bloom</p>
      </div>
      <CardList cardList={REPLAY_LIST} />
    </div>
  );
};

export default Home;
