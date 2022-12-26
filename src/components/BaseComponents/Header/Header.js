import styles from './Header.module.css';
import Logo from './Logo';

const Header = () => {
  return (
    <div className={styles.header}>
      <Logo></Logo>
    </div>
  );
};

export default Header;