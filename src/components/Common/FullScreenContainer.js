import styles from './FullScreenContainer.module.css';

const FullScreenContainer = (props) => {
  const classes = styles['full-screen-container'] + ' ' + props.className;

  return (
    <div className={classes}>{props.children}</div>
  );
};

export default FullScreenContainer;