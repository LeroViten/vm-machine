import React, { Component } from 'react';
import './HomeNav.scss';

export default class HomeNav extends Component {
  render() {
    return (
      <div className="btnWrapper">
        <button className="addBtn" type="button">
          Add VM
        </button>
        <button className="listBtn" type="button">
          VM List
        </button>
      </div>
    );
  }
}
