import { Route } from 'react-router-dom';
import { ErrorBoundaryRoutes } from '../components/base/error/ErrorBoundaryRoutes';
// import Home from '../pages/Home'
import HomePage from '../page/HomePage';
import ServicePage from '../page/ServicePage';
import ProjectPage from '../page/ProjectPage';
import AboutUsPage from '../page/AboutUsPage';
import NewsPage from '../page/NewsPage';
import AboutUsDetailPage from '../page/AboutUsDetailPage';
import NewDetailPage from '../page/NewDetailPage';
import ProjectDetailPage from '../page/ProjectDetailPage';
const Router = () => {
  return (
    <ErrorBoundaryRoutes>
      <Route path={'/'} element={<HomePage />} />
      <Route path={'/dich-vu'} element={<ServicePage />} />
      <Route path={'/du-an'} element={<ProjectPage />} />
      <Route path={'/ve-chung-toi'} element={<AboutUsPage />} />
      <Route path={'/chi-tiet'} element={<AboutUsDetailPage />} />
      <Route path={'/tin-tuc'} element={<NewsPage />} />
      <Route path={'/tin-tuc-chi-tiet'} element={<NewDetailPage />} />
      <Route path={'/du-an-chi-tiet'} element={<ProjectDetailPage />} />
    </ErrorBoundaryRoutes>
  );
};

export default Router;
