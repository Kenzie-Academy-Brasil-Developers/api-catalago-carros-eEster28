import { Router } from "express"
import { CarController } from "../controllers/car.controllers"
import { CarMiddleware } from "../middlewares/car.middleware"
import { carCreateSchema, carUpdateSchema } from "../schemas/car.schemas"

export const carRouter = Router()

const carMiddleware = new CarMiddleware()

const carControllers = new CarController()

carRouter.post(
    "/",
    carMiddleware.validateBody(carCreateSchema),
    (req, res) => carControllers.create(req, res)
)

carRouter.get(
    "/",
    (req, res) => carControllers.get(req, res)
)

carRouter.use(
    "/:id",
    carMiddleware.isCarIdValid
)

carRouter.get(
    "/:id",
    (req, res) => carControllers.getOne(req, res)
)

carRouter.patch(
    "/:id",
    carMiddleware.validateBody(carUpdateSchema),
    (req, res) => carControllers.update(req, res)
)

carRouter.delete(
    "/:id",
    (req, res) => carControllers.delete(req, res)
)