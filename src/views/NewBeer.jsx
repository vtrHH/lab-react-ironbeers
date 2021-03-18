import React, { Component } from 'react';
import Header from './../components/Header';

export class NewBeer extends Component {
  state = {
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: '',
    contributed_by: '',
  };

  handleGenericChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <Header />
        <form
          onSubmit={this.handleSubmission}
          action="POST"
          className="new-beer-form"
        >
          <label>Name</label>
          <input
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.handleGenericChange}
          />

          <label>Tagline</label>
          <input
            name="tagline"
            type="text"
            value={this.state.tagline}
            onChange={this.handleGenericChange}
          />

          <label>Description</label>
          <input
            name="description"
            type="text"
            value={this.state.description}
            onChange={this.handleGenericChange}
          />

          <label htmlFor="first_brewed">First Brewed</label>
          <input
            name="first_brewed"
            type="text"
            value={this.state.first_brewed}
            onChange={this.handleGenericChange}
          />

          <label>Brewers Tips</label>
          <input
            name="brewers_tips"
            type="text"
            value={this.state.brewers_tips}
            onChange={this.handleGenericChange}
          />

          <label>Attenuation Level</label>
          <input
            name="attenuation_level"
            type="number"
            value={this.state.attenuation_level}
            onChange={this.handleGenericChange}
          />

          <label>Contributed By</label>
          <input
            name="contributed_by"
            type="text"
            value={this.state.contributed_by}
            onChange={this.handleGenericChange}
          />

          <button>ADD NEW</button>
        </form>
      </div>
    );
  }
}

export default NewBeer;
