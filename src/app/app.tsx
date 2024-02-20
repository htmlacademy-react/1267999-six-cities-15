import MainPage from 'pages/main-page';

type TAppMainProps = {
  cardsCount: number;
};

function App({ cardsCount }: TAppMainProps) {
  return <MainPage cardsCount={cardsCount} />;
}

export default App;
