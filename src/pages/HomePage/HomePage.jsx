import React, { Component } from 'react';
import HomeNav from '../../components/HomeNav';
import './HomePage.scss';

class HomePage extends Component {
  render() {
    return (
      <div className="wrapper">
        <HomeNav />
      </div>
    );
  }
}

export default HomePage;
