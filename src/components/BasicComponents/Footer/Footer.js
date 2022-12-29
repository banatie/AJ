import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <nav>
        <ul className={styles['footer-list']}>
          <li className={styles['footer-item']}><a href="/">AJ @ 2023</a></li>
          <li className={styles['footer-item']}><a href="/">Privacy & Legal</a></li>
          <li className={styles['footer-item']}><a href="https://twitter.com/GooglePython">Twitter</a></li>
          <li className={styles['footer-item']}><a href="https://note.com/banatie">Note</a></li>
          <li className={styles['footer-item']}><a href="/">Contact</a></li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;