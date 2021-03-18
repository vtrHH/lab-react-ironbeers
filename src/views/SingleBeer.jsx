import React, { Component } from 'react';
import Header from '../components/Header';
import { loadSingleBeer } from './../services/beers-api';

export class SingleBeer extends Component {
  state = {
    beer: null,
  };

  componentDidMount() {
    this.loadSingleBeer();
  }

  componentDidUpdate(previousProps) {
    if (previousProps.match.params.beerId !== this.props.match.params.beerId) {
      this.loadSingleBeer();
    }
  }

  async loadSingleBeer() {
    const id = this.props.match.params.beerId;
    const single = await loadSingleBeer(id);
    this.setState({ beer: single });
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

export default SingleBeer;
