import React, { Component } from 'react';
import { ToastContainer, Zoom } from 'react-toastify';
import { connect } from 'react-redux';
import * as globalActions from './redux/actions/globalActions';
import HomePage from './pages/HomePage';
import Modal from './components/Modal';
import VMCreateNavigation from './components/VMCreateNavigation';
import ListPage from './pages/ListPage';
import 'react-toastify/dist/ReactToastify.css';
class App extends Component {
  toggleModal = () => {
    const { isModalShown, toggleModal } = this.props;
    toggleModal(!isModalShown);
  };

  render() {
    const { isModalShown, isEditorOpen, isListOpen } = this.props;

    return (
      <div>
        <HomePage toggleModal={this.toggleModal} />
        {isModalShown && (
          <Modal toggleModal={this.toggleModal}>
            {isEditorOpen && <VMCreateNavigation />}
            {isListOpen && <ListPage />}
          </Modal>
        )}
        <ToastContainer transition={Zoom} autoClose={3000} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isModalShown: state.global.isModalShown,
    isEditorOpen: state.global.isEditorOpen,
    isListOpen: state.global.isListOpen,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    toggleModal: (value) => dispatch(globalActions.toggleModal(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
