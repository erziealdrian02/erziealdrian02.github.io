import PortofolioPage from '../views/pages/pages-portofolio';
import PortofolioPageEn from '../views/pages/pages-portofolio-en';
import PortofolioPageJp from '../views/pages/pages-portofolio-jp';
import Upcoming from '../views/pages/upcoming';
// import Detail from '../views/pages/detail';

const routes = {
  '/': PortofolioPage, // default page
  '/now-playing': PortofolioPage,
  '/en': PortofolioPageEn,
  '/jp': PortofolioPageJp,
};

export default routes;
