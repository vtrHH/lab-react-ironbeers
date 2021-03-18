import React, { Component } from 'react';
import Header from './../components/Header';

import { loadRandomBeer } from './../services/beers-api';

export class RandomBeer extends Component {
  state = {
    beer: null,
  };

  componentDidMount() {
    this.loadSingleRandomBeer();
  }

  componentDidUpdate(previousProps) {
    if (previousProps.match.params.beerId !== this.props.match.params.beerId) {
      this.loadSingleBeer();
    }
  }

  async loadSingleRandomBeer() {
    const random = await loadRandomBeer();
    this.setState({ beer: random });
  }

  render() {
    const single = this.state.beer;
    return (
      <div>
        <Header />
        {single && (
          <>
            <img
              className="single-beer-image"
              src={single.image_url}
              alt={single.name}
            />
            <h3>{single.name}</h3>
            <h5>{single.tagline}</h5>
            <h3>{single.first_brewed}</h3>
            <span>{single.attenuation_level}</span>
            <p>{single.description}</p>
            <span>{single.contributed_by}</span>
          </>
        )}
      </div>
    );
  }
}
export default RandomBeer;
