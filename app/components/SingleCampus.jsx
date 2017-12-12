import React, { Component } from 'react';
import axios from 'axios';
import Students from './Students.jsx';
import { Link } from 'react-router-dom'
export default class SingleCampus extends Component {
  constructor (props) {
    super(props);
    this.state = {
      name: '',
      imageUrl: '',
      description: '',
      id: 0,
      students: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateCampusInfo = this.updateCampusInfo.bind(this);
  }

  handleChange (evt) {
    const value = evt.target.value;
    this.setState({
      [evt.target.name]: value
    });
  }

  updateCampusInfo (name, imageUrl, description){
    axios.put(`/api/campuses/${this.state.id}`, { name, imageUrl, description })
    .then(res => res.data)
    .then(campus => {
    const  { name, imageUrl, description } = campus
      this.setState({ name, imageUrl, description })
      window.location.reload()
    })
    .catch(console.error);
  }

  handleSubmit (evt) {
    evt.preventDefault();
    const updateCampusInfo = this.updateCampusInfo;
    updateCampusInfo(this.state.name, this.state.imageUrl, this.state.description);
  }

  fetchCampus (campusId) {
    axios.get(`/api/campuses/${campusId}`)
      .then(res => res.data)
      .then(campus => {
        const  { name, imageUrl, description, id } = campus
          this.setState({ name, imageUrl, description, id })
        })
        .then(() => this.getStudents())
        .catch(console.error);
  }
  getStudents () {
    axios.get('/api/students/')
    .then(res => res.data)
    .then(students => {
      students = students.filter(student => student.campusId === this.state.id)
      this.setState({ students })
    })
    .catch(console.error);
  }
  componentDidMount () {
    const campusId = this.props.match.params.campusId;
    this.fetchCampus(campusId);
  }
  render () {
    const students = this.state.students
    const description = this.state.description
    const name = this.state.name;
    const imageUrl = this.state.imageUrl;
    const handleChange = this.handleChange
    const handleSubmit = this.handleSubmit
    const campus = this.state.campus;

    return (
      <div>
        <h2>{ name }</h2>
        <img src={ imageUrl } />
        <p>{description}</p>
        <h2>Students</h2>
        {
          students.map(student => (
            <div key={student.id}>
              <Link to={`/students/${student.id}`}>
                  <p>{ student.fullName }</p>
              </Link>
            </div>
          ))
        }
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Edit Campus Info</legend>
            <div>
              <label>Name</label>
              <div>
                <input
                  name="name"
                  type="text"
                  onChange={handleChange}
                  value={name}
                />
              </div>
            </div>
            <div>
              <label>Image URL</label>
                <div>
                  <input
                    name="imageUrl"
                    type="text"
                    onChange={handleChange}
                    value={imageUrl}
                  />
              </div>
            </div>
            <div>
              <label >Description</label>
                <div>
                  <input
                    name="description"
                    type="text"
                    onChange={handleChange}
                    value={description}
                  />
              </div>
            </div>
            <div>
              <div>
                <button type="submit">
                  Update Campus Info
                </button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    )
  }
}
