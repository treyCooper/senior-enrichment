import React, { Component } from 'react';
import SingleStudent from './SingleStudent.jsx';
import NewStudent from './NewStudent'
import { Link } from 'react-router-dom';
import axios from 'axios';
//import store, {} from '../store';

export default class Students extends Component {
  constructor (props) {
    super(props);
    // this.state = store.getState
    this.deleteStudent = this.deleteStudent.bind(this)
  }
  deleteStudent(event, studentId) {
    event.preventDefault
    axios.delete(`/api/students/${studentId}`)
    .then(window.location.reload())
    };
  render () {
    const students = this.props.students
    const deleteStudent = this.deleteStudent
    //const campuses = this.props.campuses
    return (
      <div>
        <h3>Students</h3>
        {
          students.map(student => (
            <div key={student.id}>
              <Link to={`/students/${student.id}`}>

                <h5>
                  <span>{ student.fullName }</span>
                </h5>
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
