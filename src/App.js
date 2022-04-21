import React, { Component, Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Loader from './components/Loader';

// lazy-load pages:
const CreatePage = lazy(() =>
  import('./pages/CreatePage' /* webpackChunkName: "CreatePage" */)
);
const ListPage = lazy(() =>
  import('./pages/ListPage' /* webpackChunkName: "ListPage" */)
);
const NotFoundPage = lazy(() =>
  import('./pages/NotFoundPage' /* webpackChunkName: "NotFoundPage" */)
);

// lazy-load subViews:
const GeneralView = lazy(() =>
  import(
    './pages/SubViews/GeneralView' /* webpackChunkName: "general-subpage" */
  )
);
const DestinationView = lazy(() =>
  import(
    './pages/SubViews/DestinationView' /* webpackChunkName: "destination-subpage" */
  )
);
const SummaryView = lazy(() =>
  import(
    './pages/SubViews/SummaryView' /* webpackChunkName: "summary-subpage" */
  )
);
class App extends Component {
  render() {
    return (
      <div>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="create" element={<CreatePage />}>
              <Route path="one" element={<GeneralView />} />
              <Route path="two" element={<DestinationView />} />
              <Route path="three" element={<SummaryView />} />
            </Route>
            <Route path="list" element={<ListPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </div>
    );
  }
}

export default App;
