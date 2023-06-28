import express from 'express'
import routes from './routes'
import mongoose from 'mongoose'

class App{
  public express: express.Application

  public constructor(){
    this.express = express()
    this.middleware()
    this.routes()
    this.database()
  }
  private async database() {
    try {
      mongoose.set('strictQuery', true)
      await mongoose.connect('mongodb+srv://guiBorges1910:17101910@cluster0.feeupph.mongodb.net/')
      console.log('Deu bom')
    } catch (error) {
      console.log('Erro!')
    }
  }
  routes() {
    this.express.use(routes)
  }
  middleware(): void {
    this.express.use(express.json())
  }
}

export default new App().express