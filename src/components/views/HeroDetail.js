import React, { Component } from "react";
import { inject, observer } from "mobx-react";

const HeroDetail = inject("HeroStore")(
  observer(
    class HeroDetail extends Component {
      componentDidMount() {
        this.props.HeroStore.fetchHeroDetails(this.props.match.params.id);
      }

      render() {
        if (this.props.HeroStore.isLoading) {
          return <div>loading...</div>;
        }

        return <div>{this.props.HeroStore.heroDetails.name}</div>;
      }
    }
  )
);

export default HeroDetail;
