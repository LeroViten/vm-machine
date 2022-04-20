import React, { Component } from 'react';
import './HomeNav.scss';

export default class HomeNav extends Component {
  render() {
    return (
      <div className="btnWrapper">
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
