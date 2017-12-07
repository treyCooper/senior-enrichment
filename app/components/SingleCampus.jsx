import React, { Component } from 'react';
import axios from 'axios';
export default class SingleStudent extends Component {
  constructor (props) {
    super(props);
    this.state = {
      campus: {}
    }
    // this.state = store.getState
  }
  fetchCampus (campusId) {
    axios.get(`/api/campuses/${campusId}`)
      .then(res => res.data)
      .then(campus => this.setState({
        campus
      }));
  }
  componentDidMount () {
    const campusId = this.props.match.params.campusId;
    this.fetchCampus(campusId);
  }
  render () {
    const campus = this.state.campus;
    console.log(campus)
    return (
      <div>
        <h3>{ campus.name }</h3>
        <img src={ campus.imageUrl } />
        <p>{campus.description}</p>
      </div>
    )
  }
}
