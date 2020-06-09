import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ onChangeFilter }) => (
  <>
    <h4>Find contact by name</h4>
    <input type="text" name="filter" onChange={onChangeFilter} />
  </>
);

export default Filter;

Filter.prototype = {
  onChangeFilter: PropTypes.func.isRequired,
};
