class SwapiService {
  _apiBase = `https://swapi.dev/api`;

  async getResource(url) {
    const result = await fetch(`${this._apiBase}${url}`);

    if (!result.ok) {
      throw new Error(`Could not fetch ${url}, received ${result.status}`);
    }

    const body = await result.json();
    return body;
  }

  async getAllPeople() {
    const result = await this.getResource(`/people/`);
    return result.results;
  }

  getPerson(id) {
    return this.getResource(`/people/${id}/`);
  }

  async getAllPlanets() {
    const result = await this.getResource(`/planets/`);
    return result.results;
  }

  getPlanet(id) {
    return this.getResource(`/planets/${id}/`);
  }

  async getAllStarships() {
    const result = await this.getResource(`/starships/`);
    return result.results;
  }

  getStarship(id) {
    return this.getResource(`/starships/${id}/`);
  }
}

const swapi = new SwapiService();

swapi.getAllPeople().then((people) => {
  people.forEach(person => {
    console.log(person.name);
  });
});
