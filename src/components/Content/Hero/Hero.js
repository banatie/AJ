import { useState } from 'react';

import colorful_light_bulb from './images/colorful_light_bulb.jpeg';
// import light_bulbs from './images/light_bulbs.jpeg';
// import light_stand from './images/light_stand.jpeg';
// import yellow_light_bulb from './images/yellow_light_bulb.jpeg';

import styles from './Hero.module.css';

const Hero = () => {
  const heroMessage = 'Website is Playground';
  const [isHeroMessageVisible, setHeroMessageVisible] = useState(false);

  const imgLoadHandler = (event) => {
    setTimeout(() => {
      setHeroMessageVisible(true);
    }, 350);
  };

  return (
    <div className={styles.hero}>
      <img src={colorful_light_bulb} alt="Light bulb" onLoad={imgLoadHandler} />
      {isHeroMessageVisible && <div className={styles['hero-message']}>{heroMessage}</div>}
    </div>
  );
};

export default Hero;