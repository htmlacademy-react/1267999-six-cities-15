import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage from 'pages/main-page';
import { Path } from '../const';
import LoginPage from 'pages/login-page';
import NotFound from 'pages/not-found';

type TAppMainProps = {
  cardsCount: number;
};

function App({ cardsCount }: TAppMainProps) {
  const router = createBrowserRouter([
    {
      path: Path.Main,
      element: <MainPage cardsCount={cardsCount} />,
    },
    {
      path: Path.Login,
      element: <LoginPage />,
    },
    {
      path: Path.NotFound,
      element: <NotFound />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
