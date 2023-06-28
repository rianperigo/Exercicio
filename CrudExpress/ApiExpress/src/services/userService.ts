import { ParamsDictionary } from "express-serve-static-core";
import userSchema from "../schemas/userSchema";
import { writeFile, readFile } from 'fs/promises'

class UserService{

  async create(data: any) {
    const result = await userSchema.create(data)
    return result
  }

  async createLocal(data: any, name: string) {
    await writeFile(name, JSON.stringify(data, null, 2))
  }

  async readLocal(name: string) {
    const content = await readFile(name)
    return JSON.parse(content.toString())
  }
  
  async update(id: any) {
    const result = await userSchema.updateOne(id)
    return result
  }
  async findById(id: any) {
    const result = await userSchema.findById(id)
    return result
  }
  async findAll() {
    const result = await userSchema.find()
    return result
  }

  async delete(id: any) {
    const result = await userSchema.deleteOne(id)
    return result
  }
}

export default new UserService()