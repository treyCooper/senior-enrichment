import React, { Component } from 'react';
import SingleCampus from './SingleCampus.jsx';
import { Link } from 'react-router-dom';

// import store, {} from '../store';

export default class Campuses extends Component {
  constructor (props) {
    super(props);
    // this.state = store.getState
  }

  render () {
    const campuses = this.props.campuses
    const students = this.props.students
    return (
      <div>
        <h3>Campuses</h3>
        {
          campuses.map(campus => (
            <div key={campus.id}>
              <Link to={`/campuses/${campus.id}`}>
                <img src={ campus.imageUrl } />
                <h5>
                  <span>{ campus.name }</span>
                </h5>
              </Link>
            </div>
          ))
        }
      </div>
    )
  }
}
