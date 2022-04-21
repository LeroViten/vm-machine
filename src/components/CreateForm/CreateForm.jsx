import React, { Component } from 'react';
import { toast } from 'react-toastify';
import './CreateForm.scss';

const ipRegExp =
  '(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])';

const initialState = {
  ip: '',
  login: '',
  password: '',
  processor: 'celeron',
  name: '',
};

export default class CreateForm extends Component {
  state = initialState;

  handleInputChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (
      this.state.ip === '' ||
      this.state.login === '' ||
      this.state.name === '' ||
      this.state.password === ''
    ) {
      toast.error('All fields are required');
      return;
    } else {
      const data = this?.state;
      console.log('data :>> ', data);
    }
    this.reset();
  };

  reset() {
    this.setState(initialState);
  }

  render() {
    return (
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
            placeholder="Min 4 and max 10 characters"
            title="Minimum 4 and maximum 10 characters"
            minLength={4}
            maxLength={10}
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
            placeholder="Min 6 and max 20 characters"
            title="Minimum 6 and maximum 20 characters"
            minLength={6}
            maxLength={20}
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
            placeholder="Min 4 and max 10 characters"
            title="Minimum 4 and maximum 10 characters"
            minLength={4}
            maxLength={10}
            required
          />
        </form>
        <div className="footBtnWrapper">
          <button className="backBtn" type="button">
            Back
          </button>
          <button className="nextBtn" type="submit" onClick={this.handleSubmit}>
            Next
          </button>
        </div>
      </div>
    );
  }
}
