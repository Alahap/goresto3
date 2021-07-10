import Home from '../views/pages/home';
import List from '../views/pages/list';
import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/list': List,
  '/detail/:id': Detail,
  '/favorite': Favorite,
};

export default routes;