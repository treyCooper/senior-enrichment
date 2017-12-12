import React, { Component } from 'react';
import SingleCampus from './SingleCampus.jsx';
import { Link } from 'react-router-dom';
import NewCampus from './NewCampus.jsx';
import axios from 'axios';

export default class Campuses extends Component {
  constructor (props) {
    super(props);
    this.deleteCampus = this.deleteCampus.bind(this)
  }

  deleteCampus(event, campusId) {
    event.preventDefault
    axios.delete(`/api/campuses/${campusId}`)
    .then(window.location.reload())
    .catch(console.error);
    };

  render () {
    const campuses = this.props.campuses
    const deleteCampus = this.deleteCampus
    return (
      <div>
        <h2>Campuses</h2>
        {
          campuses.map(campus => (
            <div key={campus.id}>
              <Link to={`/campuses/${campus.id}`}>
                <img src={ campus.imageUrl } />
                  <p>{ campus.name }</p>
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
