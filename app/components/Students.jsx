import React, { Component } from 'react';
import SingleStudent from './SingleStudent.jsx';
import NewStudent from './NewStudent'
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Students extends Component {
  constructor (props) {
    super(props);
    this.deleteStudent = this.deleteStudent.bind(this)
  }
  deleteStudent(event, studentId) {
    event.preventDefault
    axios.delete(`/api/students/${studentId}`)
    .then(window.location.reload())
    .catch(console.error);
    };
  render () {
    const students = this.props.students
    const deleteStudent = this.deleteStudent
    return (
      <div>
        <h2>Students</h2>
        {
          students.map(student => (
            <div key={student.id}>
              <Link to={`/students/${student.id}`}>
                <p>{ student.fullName }</p>
              </Link>
              <button onClick={event => deleteStudent(event, student.id)}>delete student</button>
            </div>
          ))
        }
          <hr/>
        <NewStudent addStudent={this.props.addStudent} campuses={this.props.campuses}/>
      </div>
    )
  }
}
