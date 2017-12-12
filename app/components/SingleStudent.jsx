import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class SingleStudent extends Component {
  constructor (props) {
    super(props);
    this.state = {
      id: '',
      firstName: '',
      lastName: '',
      fullName: '',
      email: '',
      gpa: '',
      campusId: '',
      campus: {},
      campuses: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (evt) {
    const value = evt.target.value;
    this.setState({
      [evt.target.name]: value
    });
  }

  updateStudentInfo(firstName, lastName, email, gpa, campusId){
    axios.put(`/api/students/${this.state.id}`, { firstName, lastName, email, gpa, campusId })
    .then(res => res.data)
    .then(student => {
    const  { firstName, lastName, email, gpa, campusId } = student
      this.setState({ firstName, lastName, email, gpa, campusId })
      window.location.reload()
    })
    .catch(console.error);
  }
  handleSubmit (evt) {
    evt.preventDefault();
    this.updateStudentInfo(this.state.firstName, this.state.lastName, this.state.email, this.state.gpa, this.state.campusId)
  }

  fetchStudent (studentId) {
    axios.get(`/api/students/${studentId}`)
      .then(res => res.data)
      .then(student => {
        const  { id, firstName, lastName, fullName, email, gpa, campusId } = student
          this.setState({id, firstName, lastName, fullName, email, gpa, campusId })
        })
        .then(() => this.getCampuses())
        .catch(console.error);
  }
  getCampuses () {
    axios.get('/api/campuses/')
    .then(res => res.data)
    .then(campuses => {
      const campus = campuses.filter(campus => campus.id === this.state.campusId)[0]
      this.setState({ campus, campuses })
    })
    .catch(console.error);
  }
  componentDidMount () {
    const studentId = this.props.match.params.studentId;
    this.fetchStudent(studentId);
  }
  render () {
    const firstName = this.state.firstName;
    const lastName = this.state.lastName;
    const fullName = this.state.fullName
    const email = this.state.email;
    const gpa = this.state.gpa;
    const handleSubmit = this.handleSubmit;
    const handleChange = this.handleChange;
    return (
      <div>
        <h3>{ fullName }</h3>
        <ul>
          <li>email: {email}</li>
          <li>gpa: {gpa}</li>
          <li>campus: <Link to={`/campuses/${this.state.campus.id}`}>{this.state.campus.name}</Link></li>
        </ul>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Update Student Info</legend>
            <div>
              <label>First Name</label>
              <div>
                <input
                  name="firstName"
                  type="text"
                  onChange={handleChange}
                  value={firstName}
                />
              </div>
            </div>
            <div>
              <label>Last Name</label>
              <div>
                <input
                  name="lastName"
                  type="text"
                  onChange={handleChange}
                  value={lastName}
                />
              </div>
            </div>
            <div>
              <label>Email</label>
              <div>
                <input
                  name="email"
                  type="text"
                  onChange={handleChange}
                  value={email}
                />
              </div>
            </div>
            <div>
              <label>GPA</label>
              <div>
                <input
                  name="gpa"
                  type="text"
                  onChange={handleChange}
                  value={gpa}
                />
              </div>
            </div>
            <div>
              <label>Campus</label>
              <div>
                <select onChange={this.handleChange} value={this.state.campusId} name="campusId">
                  {this.state.campuses.map(campus => <option key={campus.id} name="campusId" value={campus.id}>
                    {campus.name}
                    </option>
                  )}
                </select>
              </div>
            </div>
            <div>
              <button type="submit">
                Update Student Info
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    )
  }
}
