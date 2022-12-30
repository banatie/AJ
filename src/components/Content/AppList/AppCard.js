import Card from "../../Common/Card/Card";

import styles from './AppCard.module.css';

const AppCard = (props) => {
  return (
    <Card className={styles['app-card']}>
      <a href={props.url}>
        <img src={props.image} alt={props.imageAlt} />
      </a>
      <h3>{props.title}</h3>
    </Card>
  );
};

export default AppCard;