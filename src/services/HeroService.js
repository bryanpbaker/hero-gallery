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
}
