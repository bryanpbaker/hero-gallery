export default class HeroService {
  async fetchHeroes(searchTerm) {
    const res = await fetch(
      `${
        process.env.REACT_APP_MARVEL_API
      }characters?nameStartsWith=${searchTerm}&apikey=${
        process.env.REACT_APP_MARVEL_PUBLIC
      }`
    );

    const heroes = await res.json();
    return heroes.data.results;
  }

  async fetchHeroDetails(id) {
    const res = await fetch(
      `${process.env.REACT_APP_MARVEL_API}characters/${id}?apikey=${
        process.env.REACT_APP_MARVEL_PUBLIC
      }`
    );

    const heroDetails = await res.json();

    return heroDetails.data.results[0];
  }
}
