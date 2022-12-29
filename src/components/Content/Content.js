import AppList from './AppList/AppList';
import Hero from './Hero/Hero';
import styles from './Content.module.css';

const Content = () => {
  return (
    <div className={styles.content}>
      <Hero></Hero>
      <AppList></AppList>
      <AppList></AppList>
      <AppList></AppList>
    </div>
  );
};

export default Content;