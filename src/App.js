import React, { Component, Suspense, lazy } from 'react';
// import { Routes, Route } from 'react-router-dom';
import { ToastContainer, Zoom } from 'react-toastify';
import HomePage from './pages/HomePage';
import Modal from './components/Modal';
import VMCreateNavigation from './components/VMCreateNavigation';
// import Loader from './components/Loader';
import 'react-toastify/dist/ReactToastify.css';

// lazy-load pages:
// const CreatePage = lazy(() =>
//   import('./pages/CreatePage' /* webpackChunkName: "CreatePage" */)
// );
// const ListPage = lazy(() =>
//   import('./pages/ListPage' /* webpackChunkName: "ListPage" */)
// );
// const NotFoundPage = lazy(() =>
//   import('./pages/NotFoundPage' /* webpackChunkName: "NotFoundPage" */)
// );

// lazy-load subViews:
// const GeneralView = lazy(() =>
//   import(
//     './pages/SubViews/GeneralView' /* webpackChunkName: "general-subpage" */
//   )
// );
// const DestinationView = lazy(() =>
//   import(
//     './pages/SubViews/DestinationView' /* webpackChunkName: "destination-subpage" */
//   )
// );
// const SummaryView = lazy(() =>
//   import(
//     './pages/SubViews/SummaryView' /* webpackChunkName: "summary-subpage" */
//   )
// );
class App extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal } = this.state;
    return (
      <div>
        <HomePage toggleModal={this.toggleModal} />
        {showModal && (
          <Modal toggleModal={this.toggleModal}>
            <VMCreateNavigation />
          </Modal>
        )}
        {/* <Suspense fallback={<Loader />}>
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
        </Suspense> */}
        <ToastContainer transition={Zoom} autoClose={3000} />
      </div>
    );
  }
}

export default App;
