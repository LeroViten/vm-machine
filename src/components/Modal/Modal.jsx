import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { connect } from 'react-redux';
import * as globalActions from '../../redux/actions/globalActions';
import { ReactComponent as CloseIcon } from '../../img/close.svg';
import 'animate.css';
import './Modal.scss';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  handleClose = () => {
    const { isEditorOpen, openEditor, isListOpen, openList, toggleModal } =
      this.props;
    toggleModal();
    openList(!isListOpen ? isListOpen : !isListOpen);
    openEditor(!isEditorOpen ? isEditorOpen : !isEditorOpen);
  };

  render() {
    const { isEditorOpen } = this.props;
    return createPortal(
      <div className="Modal__backdrop">
        <div className="Modal__content animate__animated animate__zoomIn">
          <div className="modalHeader">
            <p>
              {isEditorOpen
                ? 'Create your new virtual machine'
                : 'The list of your virtual machines'}
            </p>
            <button
              type="button"
              className="closeBtn"
              onClick={this.handleClose}
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

const mapStateToProps = (state) => {
  return {
    vms: state.vms.collection,
    repo: state.vms.repo,
    isValid: state.global.isValid,
    isPlaced: state.global.isPlaced,
    isModalShown: state.global.isModalShown,
    isEditorOpen: state.global.isEditorOpen,
    isListOpen: state.global.isListOpen,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    openEditor: (value) => dispatch(globalActions.openEditor(value)),
    openList: (value) => dispatch(globalActions.openList(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
