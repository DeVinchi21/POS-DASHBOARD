import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";

const routes = {
    '/dashboard': {
      path: '/dashboard',
      element: Dashboard,
      exact: true,
    },
    '/profile': {
      path: '/profile',
      element: Profile,
      exact: true,
    },
  };
  
 
  export default routes;
  