import {Request, Response} from 'express'
import PokemonService from '../services/pokemon.service'

class PokemonController {

    //Exercicio 1
    async saveData(req: Request, res: Response) {
        const data = await PokemonService.organizeData()
        
        await PokemonService.writeFile(data, 'pokemons.json')
        const result = await PokemonService.saveDataOnDB(data)

        res.status(200).json(result)
    }

    //Exercicio 4
    async getPokemonsByType(req: Request, res: Response) {
        const data = await PokemonService.filterPokemonsByType(req.params.type)

        res.status(200).json(data)
    }

    //Exercicio 5
    async getPokemonByDex(req: Request, res: Response) {
        const data = await PokemonService.getPokemonByDex(req.params.dex)

        res.status(200).json(data)
    }

    //Exercicio 6
    async getPokemonByName(req: Request, res: Response) {
        const data = await PokemonService.getPokemonByName(req.params.name)
    
        res.status(200).json(data)
    }

}

export default new PokemonController()