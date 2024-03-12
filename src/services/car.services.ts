import { prisma } from "../database/prisma"
import { TCarCreateSchema, TCarSchema, TCarUpdateSchema } from "../interfaces/car.interfaces"
import { carSchema } from "../schemas/car.schemas"
import { injectable } from "tsyringe"

@injectable()
export class CarServices{

    createCar = async (body: TCarCreateSchema): Promise<TCarSchema> => {

        const newCar = await prisma.car.create({ data: body })

        return carSchema.parse(newCar)
    }

    getCars = async (): Promise<Array<TCarSchema>> => {

        const carList = await prisma.car.findMany()

        return carSchema.array().parse(carList)
    }

    getOneCar = async (carId: string): Promise<TCarSchema> => {

        const getCar = await prisma.car.findFirst({ where: {id: carId}})

        return carSchema.parse(getCar)
    }

    updateCar = async (body: TCarUpdateSchema, carId: string): Promise<TCarSchema> => {

        const updateCar = await prisma.car.update({ data: body, where: {id: carId}})

        return carSchema.parse(updateCar)
    }

    deleteCar = async (carId: string): Promise<void> => {
        await prisma.car.delete({ where: {id: carId}})
    }
}