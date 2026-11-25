import Card from "../Card/Card";
import styles from "./index.module.css";

const CardList = ({ cardList }) => {
  return (
    <div className={styles.container}>
      {cardList?.map((card) => (
        <Card src={card.src} title={card.title} artist={card.artist} />
      ))}
    </div>
  );
};

export default CardList;
