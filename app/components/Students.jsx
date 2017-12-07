import React, { Component } from 'react';
import SingleStudent from './SingleStudent.jsx';
import { Link } from 'react-router-dom';
//import store, {} from '../store';

export default class Students extends Component {
  constructor (props) {
    super(props);
    // this.state = store.getState
  }

  render () {
    const students = this.props.students
    const campuses = this.props.campuses
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
            </div>
          ))
        }
      </div>
    )
  }
}
