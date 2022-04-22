import React, { Component, Suspense } from 'react';
import {
  NavLink,
  useLocation,
  useNavigate,
  Routes,
  Route,
} from 'react-router-dom';
import GeneralView from '../../pages/SubViews/GeneralView';
import DestinationView from '../../pages/SubViews/DestinationView';
import SummaryView from '../../pages/SubViews/SummaryView';
import Loader from '../Loader';
import './VMCreateNavigation.scss';

// create a function to handle using route params in class component:
function withRouter(Component) {
  function ComponentWithRouter(props) {
    let location = useLocation();
    let navigate = useNavigate();
    return <Component {...props} location={location} navigate={navigate} />;
  }
  return ComponentWithRouter;
}

class VMCreateNavigation extends Component {
  state = {};
  componentDidMount() {
    this.setState(this.props);
  }

  render() {
    const pathname = this.state.location?.pathname;
    return (
      <div className="createPageWrapper">
        <div className="navWrapper">
          <NavLink to="/">General Info</NavLink>
          <NavLink to="two">Destination</NavLink>
          <NavLink to="three">Summary</NavLink>
        </div>
        <Suspense fallback={<Loader />}>
          <Routes>
            {/* <Route index element={<GeneralView />} /> */}
            <Route path="/" element={<GeneralView />} />
            <Route path="two" element={<DestinationView />} />
            <Route path="three" element={<SummaryView />} />
          </Routes>
        </Suspense>
      </div>
    );
  }
}

const HOC = withRouter(VMCreateNavigation);
export default HOC;
