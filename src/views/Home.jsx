import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <div className="homepage-sections">
        <Link to="/beers">
          <img src={require('./../assets/beers.png')} alt="beer" />
          <h3>All Beers</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            soluta maxime, rerum deserunt quos minima atque? Illo molestias
            omnis adipisci aliquid sunt, eos dolores ea, ut, qui minima rem hic!
          </p>
        </Link>
      </div>
      <div className="homepage-sections">
        <Link to="/random-beer">
          <img src={require('./../assets/random-beer.png')} alt="random-beer" />
          <h3>Random Beers</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            soluta maxime, rerum deserunt quos minima atque? Illo molestias
            omnis adipisci aliquid sunt, eos dolores ea, ut, qui minima rem hic!
          </p>
        </Link>
      </div>
      <div className="homepage-sections">
        <Link to="/new-beer">
          <img src={require('./../assets/new-beer.png')} alt="new-beer" />
          <h3>New Beer</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            soluta maxime, rerum deserunt quos minima atque? Illo molestias
            omnis adipisci aliquid sunt, eos dolores ea, ut, qui minima rem hic!
          </p>
        </Link>
      </div>
    </div>
  );
}

export default Home;
