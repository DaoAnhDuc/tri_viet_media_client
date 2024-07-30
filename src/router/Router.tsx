import { Route } from 'react-router-dom';
import { ErrorBoundaryRoutes } from '../components/base/error/ErrorBoundaryRoutes';
// import Home from '../pages/Home'
import path from '../mocks/Path.json';
import HomePage from '../page/HomePage';
const Router = () => {
  return (
    <ErrorBoundaryRoutes>
      <Route path={path.home.url} element={<HomePage />} />
    </ErrorBoundaryRoutes>
  );
};

export default Router;
