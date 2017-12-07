import React, { Component } from 'react';
import SingleStudent from './SingleStudent.jsx';
//import store, {} from '../store';

export default class Students extends Component {
  constructor () {
    super();
   // this.state = store.getState
  }

  render () {
    return (
      <div>
      <p>students</p>
      <SingleStudent />
      </div>
    )
  }
}
