import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Triangle } from 'react-loader-spinner';
import { ToastContainer, cssTransition } from 'react-toastify';
import HomePage from './pages/HomePage';
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import 'react-toastify/dist/ReactToastify.css';

//lazy-load pages:
const CreatePage = lazy(() =>
  import('./pages/CreatePage' /* webpackChunkName: "CreatePage" */)
);
const ListPage = lazy(() =>
  import('./pages/ListPage' /* webpackChunkName: "ListPage" */)
);
const NotFoundPage = lazy(() =>
  import('./pages/NotFoundPage' /* webpackChunkName: "NotFoundPage" */)
);

// custom toast animation:
const bounce = cssTransition({
  enter: 'animate__animated animate__jackInTheBox',
  exit: 'animate__animated animate__hinge',
});

function App() {
  return (
    <div>
      <Suspense
        fallback={
          <Triangle
            height="300"
            width="300"
            color="#b00b69"
            ariaLabel="loading"
          />
        }
      >
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="create" element={<CreatePage />} />
          <Route path="list" element={<ListPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <ToastContainer transition={bounce} autoClose={3000} />
    </div>
  );
}

export default App;
