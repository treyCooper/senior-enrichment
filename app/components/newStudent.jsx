import React, { Component } from 'react';

export default class NewStudent extends Component {

  constructor (props) {
    super(props);
    this.state = {
      inputValue: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (evt) {
    const value = evt.target.value;
    this.setState({
      inputValue: value
    });
  }

  handleSubmit (evt) {
    evt.preventDefault();

    const addStudent = this.props.addStudent;
    addStudent(this.state.inputValue);
    this.setState({
      inputValue: ''
    });
  }

  render () {

    const inputValue = this.state.inputValue;
    const handleSubmit = this.handleSubmit;
    const handleChange = this.handleChange;

    return (
      <div style={{marginTop: '20px'}}>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Add Student</legend>
            <div>
              <label>Name</label>
              <div>
                <input
                  type="text"
                  onChange={handleChange}
                  value={inputValue}
                />
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
