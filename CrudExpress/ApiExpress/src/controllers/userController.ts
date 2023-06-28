import { Request, Response } from "express"
import userService from "../services/userService"

class UserController{
  async create(req: Request, res: Response) {
    const data = await userService.create(req.body)
    res.status(200).json(data)
  }

  async createLocal(req: Request, res: Response) {
    await userService.createLocal(req.body, 'user.json')
    res.status(200).json()
  }

  async readLocal( req: Request, res: Response) {
    const data = await userService.readLocal(req.params.name)
    res.status(200).json(data)
  }

  async findAll( req: Request, res: Response) {
    const data = await userService.findAll()
    res.status(200).json(data)
  }
  async findById(req: Request, res: Response) {
    const data = await userService.findById(req.params.id)
    res.status(200).json(data)
  }
  async update(req: Request, res: Response) {
    const data = await userService.update(req.params.id)
    res.status(200).json(data)
  }
  async delete(req: Request, res: Response) {
    const data = await userService.delete(req.params.id)
    res.status(200).json(data)
  }
}

export default new UserController()