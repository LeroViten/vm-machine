import React, { Component, Suspense, lazy } from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import GeneralView from '../../pages/SubViews/GeneralView';
import Loader from '../Loader';
import './VMCreateNavigation.scss';

// lazy-load routes:
const DestinationView = lazy(() =>
  import(
    '../../pages/SubViews/DestinationView' /* webpackChunkName: "DestinationView" */
  )
);

const SummaryView = lazy(() =>
  import(
    '../../pages/SubViews/SummaryView' /* webpackChunkName: "SummaryView" */
  )
);

const NotFoundPage = lazy(() =>
  import('../../pages/NotFoundPage' /* webpackChunkName: "NotFoundPage" */)
);
export default class VMCreateNavigation extends Component {
  state = {};
  componentDidMount() {
    this.setState(this.props);
  }

  render() {
    return (
      <div className="createPageWrapper">
        <div className="navWrapper">
          <NavLink to="/">General Info</NavLink>
          <NavLink to="two">Destination</NavLink>
          <NavLink to="three">Summary</NavLink>
        </div>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<GeneralView />} />
            <Route path="two" element={<DestinationView />} />
            <Route path="three" element={<SummaryView />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </div>
    );
  }
}
