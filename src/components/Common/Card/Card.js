import styles from './Card.module.css';

const Card = (props) => {
  const classes = styles.card + ' ' + props.className;

  return (
    <li className={classes}>
      {props.children}
    </li>
  );
};

export default Card;