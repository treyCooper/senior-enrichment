import React, { Component } from 'react';
import axios from 'axios';
import Students from './Students.jsx';
export default class SingleStudent extends Component {
  constructor (props) {
    super(props);
    this.state = {
      campus: {},
      students: []
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
  getStudents () {
    axios.get('/api/students/')
    .then(res => res.data)
    .then(students => {
      students = students.filter(student => student.campusId === this.state.campus.id)
      console.log('students', students)
      this.setState({ students })
    });
  }
  componentDidMount () {
    const campusId = this.props.match.params.campusId;
    this.fetchCampus(campusId);
    this.getStudents();
  }
  render () {
    const campus = this.state.campus;
    console.log(this.props)
    return (
      <div>
        <h3>{ campus.name }</h3>
        <img src={ campus.imageUrl } />
        <p>{campus.description}</p>
        <Students students={this.state.students} />
      </div>
    )
  }
}
