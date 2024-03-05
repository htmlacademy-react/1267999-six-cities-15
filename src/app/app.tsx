import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import MainPage from 'pages/main-page';
import LoginPage from 'pages/login-page';
import NotFound from 'pages/not-found';
import Offer from 'pages/offer';
import FavoritesPage from 'pages/favorites-page';
import ProtectedRoute from 'components/protected-route';
import { AppRoute, AuthorizationStatus } from 'const/const';

type TAppMainProps = {
  cardsCount: number;
};

function App({ cardsCount }: TAppMainProps) {
  const router = createBrowserRouter([
    {
      path: AppRoute.Main,
      element: <MainPage cardsCount={cardsCount} />,
    },
    {
      path: AppRoute.Login,
      element: <LoginPage />,
    },
    {
      path: AppRoute.Offers,
      element: <Offer />,
    },
    {
      path: AppRoute.NotFound,
      element: <NotFound />,
    },
    {
      path: AppRoute.Favorites,
      element: (
        <ProtectedRoute
          restrictedFor={AuthorizationStatus.NoAuth}
          redirectTo={AppRoute.Login}
        >
          <FavoritesPage />
        </ProtectedRoute>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
