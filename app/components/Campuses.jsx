import React, { Component } from 'react';
import SingleCampus from './SingleCampus.jsx';
import { Link } from 'react-router-dom';
import NewCampus from './NewCampus.jsx';
import axios from 'axios';
// import store, {} from '../store';

export default class Campuses extends Component {
  constructor (props) {
    super(props);
    // this.state = store.getState
    this.deleteCampus = this.deleteCampus.bind(this)
  }
  deleteCampus(event, campusId) {
    event.preventDefault
    axios.delete(`/api/campuses/${campusId}`)
    .then(window.location.reload())
    };

  render () {
    const campuses = this.props.campuses
    const deleteCampus = this.deleteCampus
    //const students = this.props.students
    return (
      <div>
        <h3>Campuses</h3>
        {
          campuses.map(campus => (
            <div key={campus.id}>
              <Link to={`/campuses/${campus.id}`}>
                <img src={ campus.imageUrl } />

                  <span>{ campus.name }</span>

              </Link>
              <button onClick={event => deleteCampus(event, campus.id)}>delete campus</button>

            </div>
          ))
        }
        <hr/>
        <NewCampus addCampus={this.props.addCampus}/>
      </div>
    )
  }
}
