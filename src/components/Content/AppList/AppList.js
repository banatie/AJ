import FullScreenContainer from '../../Common/FullScreenContainer';
import CardList from '../../Common/Card/CardList';
import AppCard from './AppCard';

import vendingMachineImage from './images/vending_machine.jpeg';

const AppList = () => {
  const title = 'React Apps';
  const subtitle = 'Apps that I built in order to understand the concepts of React.';

  const apps = [
    {
      title: 'Vending Machine',
      subTitle: 'React Basics',
      image: vendingMachineImage,
      imageAlt: 'Image of Vending Machine',
      url: '/'
    }, {
      title: 'Form',
      subTitle: 'Form + Email',
      image: vendingMachineImage,
      imageAlt: 'Image of Vending Machine',
      url: 'https://google.com'
    }, {
      title: 'API Integration',
      subTitle: 'Jam Stack',
      image: vendingMachineImage,
      imageAlt: 'Image of Vending Machine',
      url: 'https://google.com'
    }, {
      title: 'Vending Machine 2',
      subTitle: 'DB(Azure Cosmos) + User Login(Cookies)',
      image: vendingMachineImage,
      imageAlt: 'Image of Vending Machine',
      url: 'https://google.com'
    }
  ];

  return (
    <FullScreenContainer title={title} subtitle={subtitle} >
      <CardList>
        {apps.map((app) => (
          <AppCard
            title={app.title}
            subTitle={app.subTitle}
            image={app.image}
            alt={app.imageAlt}
            url={app.url}
          />
        ))}
      </CardList>
    </FullScreenContainer>
  );
};

export default AppList;