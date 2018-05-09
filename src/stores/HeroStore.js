import { decorate, observable, action } from "mobx";
import HeroService from "../services/HeroService";

class HeroStore {
  heroService = new HeroService();
  isLoading = true;
  searchTerm = "Spider-Man";
  heroes = [];
  heroDetails = {};
  throttleTime = 300;

  setSearchTerm(searchTerm) {
    this.searchTerm = searchTerm;
  }

  /**
   * accepts a searchTerm (string) and calls the
   * heroService to query the api for a list of
   * heroes that start with that string
   * @param {String} searchTerm
   */
  async fetchHeroes() {
    this.isLoading = true;

    try {
      const fetchedHeroes = await this.heroService.fetchHeroes(this.searchTerm);

      if (fetchedHeroes) {
        this.heroes = fetchedHeroes;
        setTimeout(() => {
          this.isLoading = false;
        }, this.throttleTime);
      }
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * accepts an id (number) and calls the
   * heroService to query the api for a hero
   * with that id
   * @param {Number} searchTerm
   */
  async fetchHeroDetails(id) {
    this.isLoading = true;

    try {
      const fetchedHeroDetails = await this.heroService.fetchHeroDetails(id);

      if (fetchedHeroDetails) {
        this.heroDetails = fetchedHeroDetails;
        setTimeout(() => {
          this.isLoading = false;
        }, this.throttleTime);
      }
    } catch (error) {
      console.error(error);
    }
  }
}

decorate(HeroStore, {
  isLoading: observable,
  searchTerm: observable,
  heroes: observable,
  heroDetails: observable,
  setSearchTerm: observable,
  fetchHeroes: action,
  fetchHeroDetails: action
});

const heroStore = new HeroStore();

export default heroStore;
