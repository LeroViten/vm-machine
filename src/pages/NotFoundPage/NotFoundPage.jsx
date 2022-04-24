import React, { Component } from 'react';
import './NotFoundPage.scss';

export default class NotFoundPage extends Component {
  render() {
    return (
      <div className="noPageWrapper">
        The page doesn't exist. Use menu on the left!{' '}
      </div>
    );
  }
}
