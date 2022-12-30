import Hero from './Hero/Hero';
import AppList from './AppList/AppList';
import BadUxList from './BadUxList/BadUxList';
import styles from './Content.module.css';

const Content = () => {
  return (
    <div className={styles.content}>
      <Hero></Hero>
      <AppList></AppList>
      <BadUxList></BadUxList>
    </div>
  );
};

export default Content;