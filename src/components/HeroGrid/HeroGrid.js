import React from "react";
import HeroCard from "../HeroCard/HeroCard";

const renderHeroes = props => {
  return props.heroes.map(hero => <HeroCard key={hero.id} hero={hero} />);
};

const HeroGrid = props => <div className="HeroGrid">{renderHeroes(props)}</div>;

export default HeroGrid;
