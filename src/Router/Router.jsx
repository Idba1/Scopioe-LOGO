import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';

const Routes = createBrowserRouter([
    {
      path: '/',
      element: <Home></Home>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [

      ],
    },
  ])


export default Routes;