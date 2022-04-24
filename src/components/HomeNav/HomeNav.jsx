import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as globalActions from '../../redux/actions/globalActions';
import './HomeNav.scss';

class HomeNav extends Component {
  state = {
    queryParams: {},
  };

  componentDidMount() {
    const params = new Proxy(new URLSearchParams(window.location.search), {
      get: (searchParams, prop) => searchParams.get(prop),
    });
    this.setState(params);
  }

  handleAddBtn = (e) => {
    const { isEditorOpen, openEditor } = this.props;
    if (e.target.className === 'addBtn') {
      this.props.toggleModal();
      openEditor(!isEditorOpen);
    }
  };

  handleListBtn = (e) => {
    const { isListOpen, openList } = this.props;
    if (e.target.className === 'listBtn') {
      this.props.toggleModal();
      openList(!isListOpen);
    }
  };

  render() {
    return (
      <div className="btnWrapper">
        <button
          className="addBtn"
          type="button"
          onClick={(e) => this.handleAddBtn(e)}
        >
          Add VM
        </button>
        <button
          className="listBtn"
          type="button"
          onClick={(e) => this.handleListBtn(e)}
        >
          VM List
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    vms: state.vms.collection,
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeNav);
