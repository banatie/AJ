import logo from './images/logo.png';
import styles from './Logo.module.css';

const Logo = () => {
  return (
    <div className={styles.logo}>
      <a href="/">
        <img src={logo} alt="AJ"></img>
      </a>
      <h1 className={styles['logo-h1']}>AJ</h1>
    </div>
  );
};

export default Logo;