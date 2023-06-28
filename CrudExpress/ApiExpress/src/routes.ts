import { Router } from "express";
import userController from "./controllers/userController";

const router = Router()

router.post('/user', userController.create)
router.get('/user', userController.findAll)
router.get('/user/:id', userController.findById)
router.put('/user/:id', userController.update)
router.delete('/user/:id', userController.delete)
router.post('/userLocal', userController.createLocal)
router.get('/userLocal/:name', userController.readLocal)


export default router