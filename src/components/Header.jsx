import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Header = withRouter((props) => {
  return (
    <div className="header">
      <Link to="/">
        <img
          src={require('./../assets/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png')}
          alt="Header"
        />
      </Link>
    </div>
  );
});

export default Header;
