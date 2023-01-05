import Card from "../../Common/Card/Card";

import styles from './UxCard.module.css';

const UxCard = (props) => {
  return (
    <Card className={styles['ux-card']}>
      <a href={props.url}>
        <img src={props.image} alt={props.imageAlt} />
      </a>
      <h3>{props.title}</h3>
    </Card>
  );
};

export default UxCard;