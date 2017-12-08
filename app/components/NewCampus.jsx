import React, { Component } from 'react';

export default class NewCampus extends Component {

  constructor (props) {
    super(props);
    this.state = {
      name: '',
      dirty: false,
      imageUrl: null,
      description: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (evt) {
    const value = evt.target.value;
    console.log(evt.target.name)
    this.setState({
      [evt.target.name]: value,
      dirty: true
    });
  }

  handleSubmit (evt) {
    evt.preventDefault();

    const addCampus = this.props.addCampus;
    addCampus(this.state.name, this.state.imageUrl, this.state.description);
    this.setState({
      name: '',
      dirty: false,
      description: ''
    });
  }

  render () {
    const description = this.state.description
    const dirty = this.state.dirty;
    const name = this.state.name;
    const imageUrl = this.state.imageUrl;
    const handleSubmit = this.handleSubmit;
    const handleChange = this.handleChange;

    let warning = '';
    if (!name && dirty) warning = 'You must enter a name';
    else if (name.length > 16) warning = 'Name must be less than 16 characters';

    return (
      <div className="well" style={{marginTop: '20px'}}>
        <form className="form-horizontal" onSubmit={handleSubmit}>
          <fieldset>
            <legend>Add Campus</legend>
            { warning && <div className="alert alert-warning">{warning}</div> }
            <div className="form-group">
              <label className="col-xs-2 control-label">Name</label>
              <div className="col-xs-10">
                <input
                  name="name"
                  type="text"
                  onChange={handleChange}
                  value={name}
                />
              </div>
            </div>
            <div className="form-group">
              <label className="col-xs-2 control-label">Image URL</label>
                <div className="col-xs-10">
                  <input
                    name="imageUrl"
                    type="text"
                    onChange={handleChange}
                    value={imageUrl}
                  />
              </div>
            </div>
            <div className="form-group">
              <label className="col-xs-2 control-label">Description</label>
                <div className="col-xs-10">
                  <input
                    name="description"
                    type="text"
                    onChange={handleChange}
                    value={description}
                  />
              </div>
            </div>
            <div className="form-group">
              <div className="col-xs-10 col-xs-offset-2">
                <button
                  type="submit"
                  className="btn btn-success"
                  disabled={!!warning || !name}>
                  Create Campus
                </button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}
