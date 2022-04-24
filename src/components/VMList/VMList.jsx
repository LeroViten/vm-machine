import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as vmActions from '../../redux/actions/vmActions';
import './VMList.scss';

class VMList extends Component {
  state = {
    shouldComponentUpdate: false,
  };

  handleStatusClick = (e, idx) => {
    const { vms, activateVM } = this.props;
    let exactVm = vms[idx];
    exactVm = { ...exactVm, isActive: !exactVm.isActive };
    vms.forEach((item, idx) => {
      if (item.id === exactVm.id) {
        vms[idx] = exactVm;
      }
    });
    activateVM(vms);
    this.setState({
      shouldComponentUpdate: !this.state.shouldComponentUpdate,
    });
  };

  handleCheckbox = (e, idx) => {
    const { vms, selectVM } = this.props;
    let exactVm = vms[idx];
    exactVm = { ...exactVm, value: !exactVm.value };
    vms.forEach((item, idx) => {
      if (item.id === exactVm.id) {
        vms[idx] = exactVm;
      }
    });
    selectVM(vms);
    this.setState({
      shouldComponentUpdate: !this.state.shouldComponentUpdate,
    });
  };

  handleDelete = () => {
    const { vms, removeVM } = this.props;
    const filteredVms = vms.filter((vm) => vm.value !== true);

    removeVM(filteredVms);
    this.setState({
      shouldComponentUpdate: !this.state.shouldComponentUpdate,
    });
  };

  handleSelectAll = () => {
    const { vms } = this.props;

    vms.forEach((vm) => {
      vm.value = !vm.value;
    });
    this.setState({
      shouldComponentUpdate: !this.state.shouldComponentUpdate,
    });
  };

  render() {
    const { vms } = this.props;
    return (
      <>
        <div className="vm-table">
          <table>
            <thead>
              <tr>
                <th>
                  <input
                    type={'checkbox'}
                    onChange={this.handleSelectAll}
                    disabled={!vms?.length}
                  />
                </th>
                <th>IP Address</th>
                <th>Processor</th>
                <th>Name</th>
                <th>Repo</th>
                <th>Login</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {vms &&
                vms.map(
                  (
                    { id, ip, login, processor, name, isActive, repo, value },
                    idx
                  ) => (
                    <tr key={id}>
                      <td>
                        <input
                          type="checkbox"
                          checked={value}
                          onChange={(e) => this.handleCheckbox(e, idx)}
                        />
                      </td>
                      <td>{ip}</td>
                      <td>{processor}</td>
                      <td>{name}</td>
                      <td>{repo}</td>
                      <td>{login}</td>
                      <td>
                        <button
                          className="activationBtn"
                          style={{
                            borderBottom: isActive
                              ? '1px solid green'
                              : '1px solid red',
                            color: isActive ? 'green' : 'red',
                          }}
                          onClick={(e) => this.handleStatusClick(e, idx)}
                        >
                          {isActive ? 'ON' : 'OFF'}
                        </button>
                      </td>
                    </tr>
                  )
                )}
            </tbody>
          </table>
        </div>
        <div className="actionsWrapper">
          <button
            className="deleteBtn"
            type="button"
            disabled={!vms?.length}
            onClick={this.handleDelete}
          >
            DELETE
          </button>
        </div>
      </>
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
    removeVM: (value) => dispatch(vmActions.removeVM(value)),
    activateVM: (value) => dispatch(vmActions.activateVm(value)),
    selectVM: (value) => dispatch(vmActions.selectVm(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VMList);
