import PortofolioPage from '../views/pages/pages-portofolio';
import Upcoming from '../views/pages/upcoming';
// import Detail from '../views/pages/detail';

const routes = {
  '/': PortofolioPage, // default page
  '/now-playing': PortofolioPage,
  '/upcoming': Upcoming,
};

export default routes;
