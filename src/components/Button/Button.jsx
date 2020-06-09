import React from 'react';
import PropTypes from 'prop-types';

import './ButtonLoadMore.css';

const ButtonLoadMore = ({ loadMore }) => (
  <button className="Button" type="button" onClick={loadMore}>Load more</button>
);

ButtonLoadMore.propTypes = {
  loadMore: PropTypes.func.isRequired,
};


export default ButtonLoadMore;
