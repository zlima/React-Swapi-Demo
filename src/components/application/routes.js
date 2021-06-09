import { Home, Film } from '../pages';

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/film/:episodeID',
    component: Film,
  },
];

export default routes;
