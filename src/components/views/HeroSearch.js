import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import styled from "styled-components";

// Import Components
import Header from "../Header";
import SearchBar from "../SearchBar";
import HeroGrid from "../HeroGrid";

// Styled Component
const HeroGridWrapper = styled.div`
  background-color: ${props => props.theme.secondary};
  padding: 20px;

  @media (min-width: 992px) {
    padding: 10%;
  }
`;

const HeroSearch = inject("HeroStore")(
  observer(
    class HeroSearch extends Component {
      handleChange = this.handleChange.bind(this);
      handleSubmit = this.handleSubmit.bind(this);

      componentWillMount() {
        this.props.HeroStore.fetchHeroes("Spider-Man");
      }

      /**
       * handle user input in the text input
       * @param {Object} event
       */
      handleChange(event) {
        this.setState({
          searchTerm: event.target.value
        });
      }

      handleSubmit(event) {
        event.preventDefault();

        if (this.state.searchTerm) {
          this.props.HeroStore.fetchHeroes(this.state.searchTerm);
        }
      }

      render() {
        return (
          <React.Fragment>
            <Header />
            <HeroGridWrapper>
              <SearchBar />
              <HeroGrid heroes={this.props.HeroStore.heroes} />
            </HeroGridWrapper>
          </React.Fragment>
        );
      }
    }
  )
);

export default HeroSearch;
