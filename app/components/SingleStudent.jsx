import React, { Component } from 'react';
import axios from 'axios';
export default class SingleStudent extends Component {
  constructor (props) {
    super(props);
    this.state = {
      student: {}
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
  componentDidMount () {
    const studentId = this.props.match.params.studentId;
    this.fetchStudent(studentId);
  }
  render () {
    const student = this.state.student;
    console.log(student)
    return (
      <div>
        <h3>{ student.fullName }</h3>
        <ul>
          <li>email: {student.email}</li>
          <li>gpa: {student.gpa}</li>
        </ul>
      </div>
    )
  }
}
