import styles from './CardList.module.css';

const CardList = (props) => {
  return (
    <ul className={styles['card-list']}>
      {props.children}
    </ul>
  );
};

export default CardList;