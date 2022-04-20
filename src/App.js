import React, { Component, Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Loader from './components/Loader';

// lazy-load the rest pages:
const CreatePage = lazy(() =>
  import('./pages/CreatePage' /* webpackChunkName: "CreatePage" */)
);
const ListPage = lazy(() =>
  import('./pages/ListPage' /* webpackChunkName: "ListPage" */)
);
const NotFoundPage = lazy(() =>
  import('./pages/NotFoundPage' /* webpackChunkName: "NotFoundPage" */)
);
class App extends Component {
  render() {
    return (
      <div>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="create" element={<CreatePage />} />
            <Route path="list" element={<ListPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </div>
    );
  }
}

export default App;
