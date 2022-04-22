import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './HomeNav.scss';

export default class HomeNav extends Component {
  state = {
    queryParams: {},
  };
  componentDidMount() {
    const params = new Proxy(new URLSearchParams(window.location.search), {
      get: (searchParams, prop) => searchParams.get(prop),
    });
    this.setState(params);
  }
  render() {
    return (
      <div className="btnWrapper">
        {/* <NavLink to="/create" className="addBtn" type="button">
          Add VM
        </NavLink>
        <NavLink to="/list" className="listBtn" type="button">
          VM List
        </NavLink> */}
        <button
          className="addBtn"
          type="button"
          onClick={this.props.toggleModal}
        >
          Add VM
        </button>
        <button
          className="listBtn"
          type="button"
          onClick={this.props.toggleModal}
        >
          VM List
        </button>
      </div>
    );
  }
}
