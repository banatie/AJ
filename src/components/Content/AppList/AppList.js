import FullScreenContainer from '../../Common/FullScreenContainer';
import CardList from '../../Common/Card/CardList';
import AppCard from './AppCard';

import vendingMachineImage from './images/vending_machine.jpeg';

const AppList = () => {
  const apps = [
    {
      title: 'Vending Machine',
      image: vendingMachineImage,
      imageAlt: 'Image of Vending Machine',
      url: '/'
    }, {
      title: 'Form',
      image: vendingMachineImage,
      imageAlt: 'Image of Vending Machine',
      url: 'https://google.com'
    }, {
      title: 'API Integration',
      image: vendingMachineImage,
      imageAlt: 'Image of Vending Machine',
      url: 'https://google.com'
    }, {
      title: 'API Integration',
      image: vendingMachineImage,
      imageAlt: 'Image of Vending Machine',
      url: 'https://google.com'
    }
  ];

  return (
    <FullScreenContainer title="Codes to Learn">
      <CardList>
        {apps.map((app) => (
          <AppCard
            title={app.title}
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