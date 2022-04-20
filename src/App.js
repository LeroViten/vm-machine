import React, { Component } from 'react';
import HomePage from './pages/HomePage';
import Modal from './components/Modal';

class App extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal } = this.state;
    return (
      <div>
        <HomePage toggleModal={this.toggleModal} />
        {showModal && <Modal toggleModal={this.toggleModal} />}
      </div>
    );
  }
}

export default App;
