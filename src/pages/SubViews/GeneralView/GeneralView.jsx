import React, { Component } from 'react';
import CreateForm from '../../../components/CreateForm';
import './GeneralView.scss';

export default class GeneralView extends Component {
  render() {
    return (
      <div className="infoContainer">
        <CreateForm />
      </div>
    );
  }
}
