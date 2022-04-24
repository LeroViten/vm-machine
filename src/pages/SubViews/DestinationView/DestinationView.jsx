import React, { Component } from 'react';
import { connect } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import TreeView from 'react-treeview';
import * as vmActions from '../../../redux/actions/vmActions';
import * as globalActions from '../../../redux/actions/globalActions';
import 'react-treeview/react-treeview.css';
import './DestinationView.scss';
import { toast } from 'react-toastify';

// create a function to handle using route params in class component:
function withRouter(Component) {
  function ComponentWithRouter(props) {
    let location = useLocation();
    let navigate = useNavigate();
    return <Component {...props} location={location} navigate={navigate} />;
  }
  return ComponentWithRouter;
}

const treeData = [
  {
    label: 'First Cluster',
    key: '0',
    children: [
      {
        label: 'first repo',
        value: 'First Repo',
        key: '0-1',
      },
      {
        label: 'second repo',
        value: 'Second Repo',
        key: '0-2',
      },
    ],
  },
  {
    label: 'Second Cluster',
    key: '1',
    children: [
      {
        label: 'third repo',
        value: 'Third Repo',
        key: '1-1',
      },
      {
        label: 'fourth repo',
        value: 'Fourth Repo',
        key: '1-2',
      },
    ],
  },
];

class DestinationView extends Component {
  state = {
    value: '',
  };

  handleChange = (e) => {
    const { checked, value } = e.target;
    const { placeVM } = this.props;

    if (this.state.value !== '') {
      return;
    } else {
      placeVM(checked);
      this.setState({ value });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { vms, pushToRepo } = this.props;
    const { value } = this.state;

    const checkboxes = document.querySelectorAll(
      "input[type='checkbox']:checked"
    );
    if (checkboxes.length > 1) {
      toast.error('You can select only one Repo! 😢');
      return;
    } else {
      let exactVm = vms.find((vm) => vm.repo === '');
      exactVm = { ...exactVm, repo: value };
      vms.forEach((item, i) => {
        if (item.id === exactVm.id) {
          vms[i] = exactVm;
        }
      });
      pushToRepo(vms);
      this.props.navigate('/three');
    }
  };

  handleBackPress = () => {
    this.props.navigate(-1);
  };

  render() {
    const { isValid, isPlaced } = this.props;
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
        <div className="destinationWrapper">
          <h5>Please select the destination repository below:</h5>
          <div className="container">
            {treeData.map((node) => {
              const { label, key, children } = node;
              const title = <span>{label}</span>;
              return (
                <TreeView key={key} nodeLabel={title} defaultCollapsed={true}>
                  {children.map(({ key, label, value }) => {
                    return (
                      <form
                        key={key}
                        onSubmit={(e) => this.handleSubmit(e)}
                        className="repoForm"
                      >
                        <label>
                          <input
                            type={'checkbox'}
                            value={value}
                            // disabled={isPlaced}
                            className="repoCheckbox"
                            onChange={this.handleChange}
                          />{' '}
                          {label}
                        </label>
                      </form>
                    );
                  })}
                </TreeView>
              );
            })}
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
              onClick={this.handleSubmit}
              disabled={!isPlaced}
            >
              Next
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
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    toggleValidation: (value) =>
      dispatch(globalActions.toggleValidation(value)),
    placeVM: (value) => dispatch(globalActions.placeVM(value)),
    pushToRepo: (value) => dispatch(vmActions.pushToRepo(value)),
  };
};

const HOC = withRouter(DestinationView);

export default connect(mapStateToProps, mapDispatchToProps)(HOC);
