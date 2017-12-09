import React, { Component } from 'react';

export default class NewStudent extends Component {

  constructor (props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      gpa: '',
      selectedCampus: 20
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (evt) {
    const value = evt.target.value;
    console.log(evt.target.name)
    this.setState({
      [evt.target.name]: value
    });
  }

  handleSubmit (evt) {
    evt.preventDefault();

    const addStudent = this.props.addStudent;
    addStudent(this.state.firstName, this.state.lastName, this.state.email, this.state.gpa, this.state.selectedCampus);
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      gpa: '',
      selectedCampus: 0
    });
  }

  render () {

    const firstName = this.state.firstName;
    const lastName = this.state.lastName;
    const email = this.state.email;
    const gpa = this.state.gpa;
    const handleSubmit = this.handleSubmit;
    const handleChange = this.handleChange;

    return (
      <div style={{marginTop: '20px'}}>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Add Student</legend>
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
                <select onChange={this.handleChange} value={this.state.selectedCampus} name="selectedCampus">
                  {this.props.campuses.map(campus => <option key={campus.id} name="selectedCampus" value={campus.id}>
                    {campus.name}
                    </option>
                  )}
                </select>
              </div>
            </div>
            <div>
              <button
                type="submit"
                >
                Add Student
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}
