import "express-async-errors"
import "reflect-metadata"
import helmet from "helmet"
import express, { json } from "express"
import { HandleErrors } from "./middlewares/handleErrors.middleware"
import { carRouter } from "./routes/car.routes"


export const app = express()

app.use(helmet())

app.use(json())

app.use("/cars", carRouter)

app.use(HandleErrors.execute)