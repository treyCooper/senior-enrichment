import React, { Component } from 'react';

export default class NewCampus extends Component {

  constructor (props) {
    super(props);
    this.state = {
      name: '',
      imageUrl: '',
      description: ''
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
    let imgUrl;
    !this.state.imageUrl.length ?  imgUrl = undefined : imgUrl = this.state.imageUrl
    console.log(imgUrl)
    const addCampus = this.props.addCampus;
    addCampus(this.state.name, imgUrl, this.state.description);
    this.setState({
      name: '',
      imgUrl: '',
      description: ''
    });
  }

  render () {
    const description = this.state.description
    const name = this.state.name;
    const imageUrl = this.state.imageUrl;
    const handleSubmit = this.handleSubmit;
    const handleChange = this.handleChange;

    return (
      <div style={{marginTop: '20px'}}>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Add Campus</legend>
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
              <label>Description</label>
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
              <button
                type="submit"
                >
                Create Campus
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}
