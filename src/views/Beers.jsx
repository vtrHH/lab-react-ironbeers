import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from './../components/Header';
import { listBeers } from './../services/beers-api';

export class Beers extends Component {
  state = {
    list: [],
  };

  componentDidMount() {
    this.loadAllBeersList();
  }

  async loadAllBeersList() {
    const list = await listBeers();
    this.setState({ list });
  }

  render() {
    return (
      <div>
        <Header />
        {this.state.list.map((beer) => (
          <li key={beer._id} className="single-beer-information-overview">
            <Link to={`/beers/${beer._id}`}>
              <img
                className="single-beer-image"
                src={beer.image_url}
                alt={beer.name}
              />
              <h3>{beer.name}</h3>
              <h5>{beer.tagline}</h5>
              <span>created by: {beer.contributed_by}</span>
            </Link>
          </li>
        ))}
      </div>
    );
  }
}

export default Beers;
