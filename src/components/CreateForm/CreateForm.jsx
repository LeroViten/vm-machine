import React, { Component } from 'react';
import { connect } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as vmActions from '../../redux/actions/vmActions';
import * as globalActions from '../../redux/actions/globalActions';
import './CreateForm.scss';

const ipRegExp =
  '(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])';

const initialState = {
  ip: '',
  login: '',
  password: '',
  processor: 'celeron',
  name: '',
  isValid: false,
};

// create a function to handle using route params in class component:
function withRouter(Component) {
  function ComponentWithRouter(props) {
    let location = useLocation();
    let navigate = useNavigate();
    return <Component {...props} location={location} navigate={navigate} />;
  }
  return ComponentWithRouter;
}

class CreateForm extends Component {
  state = initialState;

  componentDidUpdate() {
    if (
      this.state.ip.match(ipRegExp) &&
      this.state.login.length > 3 &&
      this.state.name.length > 3 &&
      this.state.password.length > 5
    ) {
      this.props.toggleValidation(true);
    } else {
      this.props.toggleValidation(false);
    }
  }

  handleInputChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.props.isValid && this.state.ip !== '') {
      const data = this.state;
      this.props.addVM(data);
      this.props.navigate('two');
    } else {
      toast.error('All fields are required');
      return;
    }
  };

  render() {
    const { isValid } = this.props;
    const empty = this.state.ip === '';
    return (
      <>
        <div className="statusWrapper">
          <div
            className={isValid ? 'status valid' : 'status'}
            style={{ backgroundColor: isValid ? 'green' : '#fff' }}
          >
            {isValid ? 'V' : 1}
          </div>
          <div className="status">2</div>
          <div className="status">3</div>
        </div>
        <div className="formWrapper">
          <form
            className="createForm"
            autoComplete="off"
            onSubmit={this.handleSubmit}
          >
            <label htmlFor="ip">IP Address</label>
            <input
              name="ip"
              id="ip"
              type="text"
              value={this.state.ip}
              onChange={this.handleInputChange}
              className="createForm__input"
              placeholder="e.g. 192.168.1.1"
              title="Valid IPv4 address e.g. 192.168.1.1"
              pattern={ipRegExp}
              required
            />
            <label htmlFor="login">Login</label>
            <input
              name="login"
              id="login"
              type="text"
              value={this.state.login}
              onChange={this.handleInputChange}
              className="createForm__input"
              placeholder="Min 4 characters"
              title="Minimum 4 characters"
              minLength={4}
              required
            />
            <label htmlFor="password">Password</label>
            <input
              name="password"
              type="password"
              id="password"
              value={this.state.password}
              onChange={this.handleInputChange}
              className="createForm__input"
              placeholder="Min 6 characters"
              title="Minimum 6 characters"
              minLength={6}
              required
            />
            <label htmlFor="processor">Processor type</label>
            <select
              name="processor"
              id="processor"
              className="createForm__select"
              defaultValue={'celeron'}
              onChange={this.handleInputChange}
              required
            >
              <option value="intel" className="createForm__option">
                Intel
              </option>
              <option value="celeron" className="createForm__option">
                Celeron
              </option>
              <option value="xeon" className="createForm__option">
                Xeon
              </option>
            </select>
            <label htmlFor="name">Virtual machine name</label>
            <input
              name="name"
              id="name"
              type="text"
              value={this.state.name}
              onChange={this.handleInputChange}
              className="createForm__input"
              placeholder="Min 4 characters"
              title="Minimum 4 characters"
              minLength={4}
              required
            />
          </form>
          <div className="footBtnWrapper">
            <button className="backBtn" type="button" disabled>
              Back
            </button>
            <button
              className="nextBtn"
              type="submit"
              onClick={this.handleSubmit}
              disabled={!isValid && empty}
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
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addVM: (data) => dispatch(vmActions.addVM(data)),
    toggleValidation: (value) =>
      dispatch(globalActions.toggleValidation(value)),
  };
};

const HOC = withRouter(CreateForm);

export default connect(mapStateToProps, mapDispatchToProps)(HOC);
