import React, { Component } from 'react';
import { connect } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as vmActions from '../../../redux/actions/vmActions';
import * as globalActions from '../../../redux/actions/globalActions';
import './SummaryView.scss';

// create a function to handle using route params in class component:
function withRouter(Component) {
  function ComponentWithRouter(props) {
    let location = useLocation();
    let navigate = useNavigate();
    return <Component {...props} location={location} navigate={navigate} />;
  }
  return ComponentWithRouter;
}

const initialState = {
  ip: '',
  login: '',
  password: '',
  processor: 'celeron',
  name: '',
  repo: '',
  value: false,
  isActive: false,
  isValid: false,
  visible: false,
};

class SummaryView extends Component {
  state = initialState;

  componentDidMount() {
    const tempData = JSON.parse(localStorage.getItem('temporaryVMData'));
    this.setState(tempData ? tempData : initialState);
  }

  handleVMActivation = (e) => {
    const { checked } = e.target;
    const { vms, activateVM } = this.props;
    let exactVm = vms.find((vm) => vm.isActive === false);
    exactVm = { ...exactVm, isActive: checked };
    vms.forEach((item, idx) => {
      if (item.id === exactVm.id) {
        vms[idx] = exactVm;
      }
    });
    activateVM(vms);
  };

  handleFinish = () => {
    const {
      navigate,
      toggleModal,
      isModalShown,
      toggleValidation,
      isValid,
      placeVM,
      isPlaced,
      isEditorOpen,
      openEditor,
      isListOpen,
      openList,
    } = this.props;
    localStorage.removeItem('temporaryVMData');
    toast.success('Virtual Machine added! 😎');
    navigate('/');
    toggleModal(!isModalShown);
    toggleValidation(!isValid);
    placeVM(!isPlaced);
    openList(!isListOpen ? isListOpen : !isListOpen);
    openEditor(!isEditorOpen ? isEditorOpen : !isEditorOpen);
  };

  handleBackPress = () => {
    this.props.navigate(-1);
  };

  render() {
    const { isPlaced, isValid } = this.props;
    const { ip, login, name, processor } = this.state;
    return (
      <>
        <div className="statusWrapper">
          <div
            className={isValid ? 'status valid' : 'status'}
            style={{ backgroundColor: isValid ? 'green' : '#fff' }}
          >
            {isValid ? 'V' : 1}
          </div>
          <div
            className={isPlaced ? 'status valid' : 'status'}
            style={{ backgroundColor: isPlaced ? 'green' : '#fff' }}
          >
            {isPlaced ? 'V' : 2}
          </div>
          <div className="status">3</div>
        </div>
        <div className="summaryWrapper">
          <h5>Summary:</h5>
          <div className="summaryData">
            <div className="vmData" key={name}>
              <div className="vmSummary">
                <p>
                  Virtual Machine address: <span>{ip}</span>
                </p>
                <p>
                  VM Processor: <span>{processor}</span>
                </p>
                <p>
                  Password: <span>*******</span>
                </p>
                <p>
                  VM Name: <span>{name}</span>
                </p>
                <p>
                  VM Login: <span>{login}</span>
                </p>
              </div>
              <div className="vmActivationContainer">
                <label>
                  <input type={'checkbox'} onChange={this.handleVMActivation} />{' '}
                  activate the VM after creation
                </label>
              </div>
            </div>
          </div>
          <div className="footBtnWrapper">
            <button
              className="backBtn"
              type="button"
              onClick={this.handleBackPress}
            >
              Back
            </button>
            <button
              className="nextBtn"
              type="submit"
              onClick={this.handleFinish}
              disabled={!isPlaced}
            >
              Finish
            </button>
          </div>
        </div>
      </>
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
    activateVM: (value) => dispatch(vmActions.activateVm(value)),
    toggleModal: (value) => dispatch(globalActions.toggleModal(value)),
    toggleValidation: (value) =>
      dispatch(globalActions.toggleValidation(value)),
    placeVM: (value) => dispatch(globalActions.placeVM(value)),
    openEditor: (value) => dispatch(globalActions.openEditor(value)),
    openList: (value) => dispatch(globalActions.openList(value)),
  };
};

const HOC = withRouter(SummaryView);

export default connect(mapStateToProps, mapDispatchToProps)(HOC);
