import {Request, Response} from 'express'
import TeamService from '../services/team.service'

class TeamController {

    //Exercicio 3, A
    async saveTeam(req: Request, res: Response) {
        const result = await TeamService.saveTeamPokemons(req.body)

        res.status(200).json(result)
    }

    //Exercicio 3, B
    async getAllTeams(req: Request, res: Response) {
        const result = await TeamService.getAllTeams()
    
        res.status(200).json(result)
    }

    //Exercicio 3, C
    async getTeamByTrainerName(req: Request, res: Response) {
        const result = await TeamService.getTeamByTrainerName(req.params.name)
        
        res.status(200).json(result)
    }
    
}

export default new TeamController()