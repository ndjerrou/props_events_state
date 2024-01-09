import Cards from './components/Cards';

import 'bulma/css/bulma.min.css';

const App = () => {
  const cardsInfo = [
    {
      title: 'John Doe',
      username: 'jdoe',
      desc: 'je suis un super développeur',
    },
    {
      title: 'Thierry le brigand',
      username: 'lebrigand',
      desc: 'Grand brigand',
    },
    {
      title: 'Cathy Perry',
      username: 'cathy',
      desc: 'Grande athlète pour les JO 2024',
    },
  ];

  return (
    <>
      <h1>Kikoo</h1>
      <Cards cardsInfo={cardsInfo} />
    </>
  );
};

export default App;
