import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import SearchBar from "../../SearchBar/SearchBar";
import HeroGrid from "../../HeroGrid/HeroGrid";

const HeroSearch = inject("HeroStore")(
  observer(
    class HeroSearch extends Component {
      handleChange = this.handleChange.bind(this);
      handleSubmit = this.handleSubmit.bind(this);

      componentWillMount() {
        this.props.HeroStore.fetchHeroes("Spider-Man");
      }

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
          <div className="App">
            <SearchBar />
            <HeroGrid heroes={this.props.HeroStore.heroes} />
          </div>
        );
      }
    }
  )
);

export default HeroSearch;
