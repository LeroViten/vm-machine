import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './HomeNav.scss';

export default class HomeNav extends Component {
  render() {
    return (
      <div className="btnWrapper">
        <NavLink to="/create" className="addBtn" type="button">
          Add VM
        </NavLink>
        <NavLink to="/list" className="listBtn" type="button">
          VM List
        </NavLink>
      </div>
    );
  }
}
