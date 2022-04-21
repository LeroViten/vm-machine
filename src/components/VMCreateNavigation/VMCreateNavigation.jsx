import React, { Component } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
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
      <div className="navWrapper">
        <NavLink to={`${pathname}/one`}>GeneralInfo</NavLink>
        <NavLink to={`${pathname}/two`}>Destination</NavLink>
        <NavLink to={`${pathname}/three`}>Summary</NavLink>
      </div>
    );
  }
}

const HOC = withRouter(VMCreateNavigation);
export default HOC;
