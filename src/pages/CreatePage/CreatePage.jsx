import React, { Component } from 'react';
import Modal from '../../components/Modal';
import VMCreateNavigation from '../../components/VMCreateNavigation';
import './CreatePage.scss';

export default class CreatePage extends Component {
  render() {
    return (
      <>
        <Modal>
          <VMCreateNavigation />
        </Modal>
      </>
    );
  }
}
