import { NextFunction, Request, Response } from "express"
import { AnyZodObject } from "zod"
import { prisma } from "../database/prisma"

export class CarMiddleware {

    validateBody =  (schema: AnyZodObject) => {
        return (
            req: Request,
            res: Response,
            next: NextFunction): void => {

            req.body = schema.parse(req.body)

            return next()
        }
    }

    isCarIdValid = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {

        const id = req.params.id

        const car = await prisma.car.findFirst({ where: {id}})

        if(!car){
            return res.status(404).json({ message:"Car not found."})
        }

        return next()
    }
}