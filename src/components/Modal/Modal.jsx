import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { ReactComponent as CloseIcon } from '../../img/close.svg';
import 'animate.css';
import './Modal.scss';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleEscButtonPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEscButtonPress);
  }

  handleEscButtonPress = (event) => {
    if (event.code === 'Escape') {
      this.props.toggleModal();
    }
  };

  handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      this.props.toggleModal();
    }
  };

  render() {
    return createPortal(
      <div className="Modal__backdrop" onClick={this.handleBackdropClick}>
        <div className="Modal__content animate__animated animate__zoomIn">
          <div className="modalHeader">
            <p>Title</p>
            <button
              type="button"
              className="closeBtn"
              onClick={this.props.toggleModal}
            >
              <CloseIcon />
            </button>
          </div>
          <hr />
          {this.props.children}
        </div>
      </div>,
      modalRoot
    );
  }
}
