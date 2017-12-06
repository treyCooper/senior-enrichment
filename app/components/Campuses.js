import React, { Component } from 'react';
import SingleCampus from './SingleCampus';
import store, {} from '../store';

export default class Campuses extends Component {
  constructor () {
    super();
    this.state = store.getState
  }

  render () {
    return (
      <SingleCampus />
    )
  }
}
