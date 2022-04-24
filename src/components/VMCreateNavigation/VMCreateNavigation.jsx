import React, { Component, Suspense, lazy } from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';
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
class VMCreateNavigation extends Component {
  render() {
    const { isValid, isPlaced } = this.props;
    return (
      <div className="createPageWrapper">
        <div className="navWrapper">
          <NavLink to="/">General Info</NavLink>
          <NavLink to="two" className={isValid ? 'valid' : 'invalid'}>
            Destination
          </NavLink>
          <NavLink to="three" className={isPlaced ? 'valid' : 'invalid'}>
            Summary
          </NavLink>
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

const mapStateToProps = (state) => {
  return {
    isPlaced: state.global.isPlaced,
    isValid: state.global.isValid,
  };
};

export default connect(mapStateToProps)(VMCreateNavigation);
