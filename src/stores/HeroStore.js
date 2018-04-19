import { decorate, observable, action } from "mobx";
import HeroService from "../services/HeroService";

class HeroStore {
  heroService = new HeroService();
  heroes = [];

  async fetchHeroes(searchTerm) {
    this.heroes = await this.heroService.fetchHeroes(searchTerm);
  }
}

decorate(HeroStore, {
  heroes: observable,
  fetchHeroes: action
});

const heroStore = new HeroStore();

export default heroStore;
