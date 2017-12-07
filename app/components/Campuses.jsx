import React, { Component } from 'react';
import SingleCampus from './SingleCampus.jsx';
// import store, {} from '../store';

export default class Campuses extends Component {
  constructor () {
    super();
    // this.state = store.getState
  }

  render () {
    return (
      <div>
      <p>campuses</p>
      <SingleCampus />
      </div>
    )
  }
}
