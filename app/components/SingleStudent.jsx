import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
export default class SingleStudent extends Component {
  constructor (props) {
    super(props);
    this.state = {
      student: {},
      campus: {}
    }
    // this.state = store.getState
  }
  fetchStudent (studentId) {
    axios.get(`/api/students/${studentId}`)
      .then(res => res.data)
      .then(student => this.setState({
        student
      }));
  }
  getCampuses () {
    axios.get('/api/campuses/')
    .then(res => res.data)
    .then(campuses => {
      const campus = campuses.filter(campus => campus.id === this.state.student.campusId)[0]
      console.log('campuses', campus)
      this.setState({ campus })
    });
  }
  componentDidMount () {
    const studentId = this.props.match.params.studentId;
    this.fetchStudent(studentId);
    this.getCampuses();
  }
  render () {
    const student = this.state.student;
    console.log(this.state)
    return (
      <div>
        <h3>{ student.fullName }</h3>
        <ul>
          <li>email: {student.email}</li>
          <li>gpa: {student.gpa}</li>

          <li>campus: <Link to={`/campuses/${this.state.campus.id}`}>{this.state.campus.name}</Link></li>

        </ul>
      </div>
    )
  }
}
