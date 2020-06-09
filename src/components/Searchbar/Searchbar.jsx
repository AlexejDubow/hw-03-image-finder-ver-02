import React from 'react';
import PropTypes from 'prop-types';
import Searchform from './Searchform/Searchform';

import './Searchbar.css';

const Searchbar = ({ onSubmit }) =>(
  <header className="Searchbar">
    <Searchform
      onSubmit={onSubmit}
      // onChange={onChange}
    />
  </header>
);
export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  // onChange: PropTypes.func.isRequired,
};
