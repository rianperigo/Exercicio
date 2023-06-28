import {Router} from 'express'
import PokemonController from './controllers/pokemon.controller'
import teamController from './controllers/team.controller'

const router = Router()

//Exercicio 1
router.post('/pokemons', PokemonController.saveData)

//Exercicio 3, A
router.post('/team', teamController.saveTeam)

//Exercicio 3, B
router.get('/teams', teamController.getAllTeams)

//Exercicio 3, C
router.get('/team/trainer-name/:name', teamController.getTeamByTrainerName)

//Exercicio 4
router.get('/pokemon/type/:type', PokemonController.getPokemonsByType)

//Exercicio 5
router.get('/pokemon/dex/:dex', PokemonController.getPokemonByDex)

//Exercicio 6
router.get('/pokemon/name/:name', PokemonController.getPokemonByName)

export default router