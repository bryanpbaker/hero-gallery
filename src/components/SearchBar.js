import React, { Component } from "react";
import { inject } from "mobx-react";
import styled from "styled-components";

// styled-components
const StyledSearchBar = styled.div`
  input {
    border: none;
    display: block;
    width: 100%;

    &::placeholder {
      opacity: 0.6;
    }
  }

  input[type="text"] {
    background: transparent;
    border-bottom: 2px solid #222;
    color: white;
    display: block;
    font-size: 3em;
    margin-bottom: 15px;
    padding: 15px 20px;
    width: 100%;

    &:focus {
      outline: none;
    }
  }

  input[type="submit"] {
    background-color: #ffeb3b;
    font-size: 2em;
    padding: 5px;
  }
`;

const SearchBar = inject("HeroStore")(
  class SearchBar extends Component {
    state = {
      searchTerm: ""
    };

    handleChange = this.handleChange.bind(this);
    handleSubmit = this.handleSubmit.bind(this);

    componentDidMount() {
      this.props.HeroStore.fetchHeroes();
    }

    handleChange(event) {
      this.setState({
        searchTerm: event.target.value
      });
    }

    handleSubmit(event) {
      const { searchTerm } = this.state;

      event.preventDefault();

      if (this.state.searchTerm.trim) {
        this.props.HeroStore.setSearchTerm(searchTerm);
        this.props.HeroStore.fetchHeroes(searchTerm);
      }
    }

    render() {
      return (
        <StyledSearchBar className="SearchBar">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder={this.props.HeroStore.searchTerm}
              onChange={this.handleChange}
            />
            <input type="submit" onSubmit={this.handleSubmit} value="Go!" />
          </form>
        </StyledSearchBar>
      );
    }
  }
);

export default SearchBar;
