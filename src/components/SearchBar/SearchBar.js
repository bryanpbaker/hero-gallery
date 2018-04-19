import React, { Component } from "react";
import { inject } from "mobx-react";

const SearchBar = inject("HeroStore")(
  class SearchBar extends Component {
    state = {
      searchTerm: ""
    };

    handleChange = this.handleChange.bind(this);
    handleSubmit = this.handleSubmit.bind(this);

    handleChange(event) {
      this.setState({
        searchTerm: event.target.value
      });
    }

    handleSubmit(event) {
      event.preventDefault();

      if (this.state.searchTerm.trim) {
        this.props.HeroStore.fetchHeroes(this.state.searchTerm);
      }
    }

    render() {
      return (
        <div className="SearchBar">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={this.state.searchTerm}
              onChange={this.handleChange}
            />
            <input type="submit" onSubmit={this.handleSubmit} />
          </form>
        </div>
      );
    }
  }
);

export default SearchBar;
