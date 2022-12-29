import styles from './Header.module.css';
import Logo from './Logo';

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo></Logo>
    </header>
  );
};

export default Header;