import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import CreateAccount from '../Pages/CreateAccount/CreateAccount';
import Main from '../MainLayout/Main/Main';

const Routes = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
      },
        {
          path: '/create-account',
          element: <CreateAccount></CreateAccount>,
      },
      ],
    },
  ])


export default Routes;