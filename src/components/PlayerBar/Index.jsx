import ProgressBarUI from "../ProgressBarUI/Index";
import styles from "./PlayerBar.module.css";
import aldebaran from "../../assets/audios/50meru - aldebaran.m4a";
import Canopus from "../../assets/audios/50meru - Canopus.m4a";
import constellations from "../../assets/audios/50meru - constellations.m4a";
import Vega from "../../assets/audios/50meru - Vega.m4a";
import 고양이코 from "../../assets/audios/CattyBGM - 고양이 코.m4a";
import 불붙인양초 from "../../assets/audios/CattyBGM - 불 붙인 양초.m4a";
import 신난양말 from "../../assets/audios/CattyBGM - 신난 양말.m4a";
import 휴화산 from "../../assets/audios/CattyBGM - 휴화산.m4a";
import butter from "../../assets/audios/ClearnEars - butter.m4a";
import Christmas from "../../assets/audios/ClearnEars - Christmas.m4a";
import 목욕오리 from "../../assets/audios/daldam music - 목욕오리.m4a";
import 밥 from "../../assets/audios/daldam music - 밥.m4a";
import 붕뜬코끼리 from "../../assets/audios/daldam music - 붕 뜬 코끼리.m4a";
import 차 from "../../assets/audios/daldam music - 차.m4a";
import { useState, useRef } from "react";
import play from "../../assets/play.svg";
import pause from "../../assets/pause.svg";
import future from "../../assets/future.svg";
import replay from "../../assets/replay.svg";
import expand from "../../assets/expand.svg";
import repeat from "../../assets/repeat.svg";
import volume from "../../assets/volume.svg";
import shuffle from "../../assets/shuffle.svg";
import hello from "../../assets/ illustration/50meru - aldebaran.jpeg";

const musicList = [
  Canopus,
  constellations,
  Vega,
  고양이코,
  불붙인양초,
  신난양말,
  휴화산,
  butter,
  Christmas,
  목욕오리,
  밥,
  붕뜬코끼리,
  차,
];

const shuffleArray = (array) => {
  const result = [...array];

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
};

const PlayerBar = () => {
  const [repeatSong, setRepeatSong] = useState(false);
  const [changeList, setChangeList] = useState(musicList);
  const [isShuffle, setIsShuffle] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const repeatToggle = () => {
    const audio = audioRef.current;
    if (repeatSong) {
      setRepeatSong(false);
      return;
    } else {
      setRepeatSong(true);
    }
  };

  const handleRepeat = () => {
    const audio = audioRef.current;
    setCurrentTime(0);
    audio.play();
  };

  const handleToggleShuffle = () => {
    if (isShuffle) {
      setIsShuffle(false);
      setChangeList(musicList);
    } else {
      setIsShuffle(true);
      const result = shuffleArray(musicList);
      setChangeList(result);
    }
  };

  const goToNextTrack = async () => {
    if (musicList.length === 0) return;
    setCurrentIndex((prev) => (musicList.length - 1 <= prev ? 0 : prev + 1));
    setCurrentTime(0);
  };

  const handleForward10 = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (duration < audio.currentTime + 10) {
      await goToNextTrack();
      await audio.play();

      console.log(audio.paused);
    } else {
      const newTime = currentTime + 10;
      audio.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const handleRewind10 = () => {
    const audio = audioRef.current;
    if (!audio) return;
    const newTime = Math.max(0, audio.currentTime - 10);
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleTogglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <footer className={styles.main}>
      <audio
        ref={audioRef}
        src={changeList[currentIndex]}
        onEnded={repeatSong ? handleRepeat : goToNextTrack}
        onTimeUpdate={() => setCurrentTime(audioRef.current.currentTime)}
        onLoadedMetadata={() => setDuration(audioRef.current.duration)}
      />
      <ProgressBarUI currentTime={currentTime} duration={duration} />
      <div className={styles.playControl}>
        <div className={styles.mainTools}>
          <button type="button" onClick={handleRewind10}>
            <img src={replay} />
          </button>
          <button type="button" onClick={handleTogglePlay}>
            <img src={isPlaying ? pause : play} />
          </button>
          <button type="button" onClick={handleForward10}>
            <img src={future} />
          </button>
        </div>
        <div className={styles.subTitle}>
          <img
            style={{ borderRadius: "9999px", width: "40px", height: "40px" }}
            src={hello}
          />
          <div className={styles.songAlt}>
            <p>vega</p>
            <p>50meru + 조회수 7.8만회 + 좋아요 1.7천개</p>
          </div>
        </div>
        <div className={styles.option}>
          <button>
            <img src={volume} />
          </button>
          <button onClick={handleToggleShuffle}>
            <img src={shuffle} />
          </button>
          <button onClick={repeatToggle}>
            <img src={repeat} />
          </button>
          <button>
            <img src={expand} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default PlayerBar;
