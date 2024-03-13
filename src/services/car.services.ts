import { prisma } from "../database/prisma"
import { TCarCreate, TCarBody, TCarUpdate } from "../interfaces/car.interfaces"
import { carSchema } from "../schemas/car.schemas"

export class CarServices{

    createCar = async (body: TCarCreate): Promise<TCarBody> => {

        const newCar = await prisma.car.create({ data: body })

        return carSchema.parse(newCar)
    }

    getCars = async (): Promise<Array<TCarBody>> => {

        const carList = await prisma.car.findMany()

        return carSchema.array().parse(carList)
    }

    getOneCar = async (carId: string): Promise<TCarBody> => {

        const getCar = await prisma.car.findFirst({ where: {id: carId}})

        return carSchema.parse(getCar)
    }

    updateCar = async (body: TCarUpdate, carId: string): Promise<TCarBody> => {

        const updateCar = await prisma.car.update({ data: body, where: {id: carId}})

        return carSchema.parse(updateCar)
    }

    deleteCar = async (carId: string): Promise<void> => {
        await prisma.car.delete({ where: {id: carId}})
    }
}