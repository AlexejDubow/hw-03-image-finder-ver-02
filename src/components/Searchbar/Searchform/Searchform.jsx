import React, { Component } from "react";

import "./Searchform.css";

export default class Searchform extends Component {
  state = { search: '' };

  handleChange = ( {target: {value}} ) => {
    this.setState({
      search: value,
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.search);
    this.setState({search: ''})
  }
  

  render() {
    const { search } = this.state;
    return (
      <form className="SearchForm" onSubmit={this.handleSubmit}>
        <button type="submit" className="SearchFormButton">
          <span className="SearchFormButtonLabel">Search</span>
        </button>

        <input
          name="search"
          className="SearchFormInput"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={this.handleChange}
          value={search}
        />
      </form>
    );
  }
}
