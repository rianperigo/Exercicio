import { writeFile, readFile } from "fs/promises";
import PokemonSchema from "../schemas/pokemon.schema";

class PokemonService {
  //Exercicio 1
  async loadDataFromAPI() {
    const response = await fetch("http://localhost:3000/pokemons-data");
    return response;
  }

  //Exercicio 1
  async organizeData() {
    const response = await this.loadDataFromAPI();
    const data = await response.json();

    const organizedData = data.map((item) => {
      let moves: any = [];
      const stats = item.stats.map((stat) => {
        return {
          name: stat.stat.name,
          value: stat.base_stat,
        };
      });

      for (let i = 0; i < 4; i++) {
        const randomIndex = Math.floor(Math.random() * item.moves.length);
        moves.push(item.moves[randomIndex]);
      }

      const data = {
        name: item.forms[0].name,
        type: item.types.map((type) => type.type.name),
        stats: stats,
        dex: item.game_indices[9].game_index,
        height: item.height,
        weight: item.weight,
        moves: moves,
      };

      return data;
    });

    return organizedData;
  }

  async writeFile(data, filename) {
    await writeFile(filename, JSON.stringify(data, null, 2));
  }

  async readFile() {
    const content = await readFile("pokemons.json");
    return JSON.parse(content.toString());
  }

  //Exercicio 1
  async saveDataOnDB(data) {
    const result = await PokemonSchema.insertMany(data);
    return result;
  }

  //Exercicio 2
  async organizeDataByPokemonType() {
    const data: any = await this.readFile();

    let types = data.map((item) => item.type[0]);
    types = types.filter((value, index) => types.indexOf(value) === index);

    const list = types.map((item) => {
      return {
        type: item,
        pokemons: data
          .filter((a) => a.type.includes(item))
          .sort((a, b) => a - b),
      };
    });

    await this.writeFile(list, "pokemonsByTypes.json");
  }

  //Exercicio 4
  async filterPokemonsByType(type) {
    const data: any = await this.readFile();

    return data.filter((item) => item.type.includes(type));
  }

  //Exercicio 5
  async getPokemonByDex(dex) {
    const data: any = await this.readFile();

    return data.filter((item) => item.dex == dex);
  }

  //Exercicio 6
  async getPokemonByName(name) {
    const data: any = await this.readFile();

    return data.filter((item) => item.name == name);
  }
}

export default new PokemonService();
