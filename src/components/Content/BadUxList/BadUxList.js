import FullScreenContainer from '../../Common/FullScreenContainer';
import CardList from '../../Common/Card/CardList';
import UxCard from './UxCard';

import vendingMachineImage from './images/vending_machine.jpeg';

const BadUxList = () => {
  const uxs = [
    {
      title: 'Too Many Colors',
      image: vendingMachineImage,
      imageAlt: 'Image of Vending Machine',
      url: '/'
    }, {
      title: 'Unmatched Colors',
      image: vendingMachineImage,
      imageAlt: 'Image of Vending Machine',
      url: 'https://google.com'
    }, {
      title: 'Unmatched Form Design',
      image: vendingMachineImage,
      imageAlt: 'Image of Vending Machine',
      url: 'https://google.com'
    }, {
      title: 'Non-Intuitive Button Color',
      image: vendingMachineImage,
      imageAlt: 'Image of Vending Machine',
      url: 'https://google.com'
    }
  ];

  return (
    <FullScreenContainer title="Codes to Learn">
      <CardList>
        {uxs.map((uxCard) => (
          <UxCard
            title={uxCard.title}
            image={uxCard.image}
            alt={uxCard.imageAlt}
            url={uxCard.url}
          />
        ))}
      </CardList>
    </FullScreenContainer>
  );
};

export default BadUxList;