import TeamSchema from '../schemas/team.schema'
import {writeFile, readFile} from 'fs/promises'

class TeamService {
    
    //Exercicio 3, A
    async saveTeamPokemons(json) {
        const data = await this.readFile('pokemons.json')
        const trainerName = json.trainerName
        const pokemons:any = []

        json.pokemons.forEach(item => {
            const pokemon = data.find(a => a.name == item)
            if (pokemon)
                pokemons.push(pokemon)
        })

        const obj = {
            trainerName: trainerName,
            pokemons: pokemons
        }

        await this.writeFile([obj])

        return obj
    }

    //Exercicio 3, B
    async getAllTeams() {
        const data = await this.readFile('team.json')

        return data
    }

    //Exercicio 3, C
    async getTeamByTrainerName(trainerName) {
        let data = await this.readFile('team.json')
        data = data.filter(a => a.trainerName == trainerName)
    
        return data
    }

    async readFile(fileName) {
        const content = await readFile(fileName)
        return JSON.parse(content.toString())
    }

    async writeFile(data) {
        await writeFile('team.json', JSON.stringify(data, null, 2))
    }
}

export default new TeamService()