import Card from './Card';

const Cards = ({ cardsInfo }) => {
  console.log(cardsInfo);
  return (
    <div id='container'>
      {/* <Card title='a title' username='username' desc='une desc' /> */}

      {cardsInfo.map(card => {
        return (
          <Card title={card.title} username={card.username} des={card.desc} />
        );
      })}
    </div>
  );
};

export default Cards;
