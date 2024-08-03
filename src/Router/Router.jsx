import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import CreateAccount from '../Pages/CreateAccount/CreateAccount';
import Main from '../MainLayout/Main/Main';
import LogIn from '../Pages/LogIn/LogIn';

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
      {
        path: '/login',
        element: <LogIn></LogIn>,
      },
    ],
  },
])


export default Routes;