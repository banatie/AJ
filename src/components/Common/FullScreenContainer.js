import styles from './FullScreenContainer.module.css';

const FullScreenContainer = (props) => {
  const classes = styles['full-screen-container'] + ' ' + props.className;

  return (
    <section className={classes}>
      <h2 className={styles['container-title']}>{props.title}</h2>
      <h3 className={styles['container-subtitle']}>{props.subtitle}</h3>
      {props.children}
    </section>
  );
};

export default FullScreenContainer;