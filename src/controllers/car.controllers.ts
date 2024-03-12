import { inject, injectable } from "tsyringe"
import { CarServices } from "../services/car.services";
import { Request, Response } from "express";

@injectable()
export class CarController {

    constructor(@inject("CarServices") private carServices: CarServices){}

    create = async (req: Request, res: Response): Promise<Response> => {

        const response = await this.carServices.createCar(req.body)

        return res.status(201).json(response)
    }

    get = async (req: Request, res: Response): Promise<Response> => {
        const response = await this.carServices.getCars()

        return res.status(200).json(response)
    }

    getOne = async (req: Request, res: Response): Promise<Response> => {
        const id = req.params.id

        const response = await this.carServices.getOneCar(id)

        return res.status(200).json(response)
    }

    update = async (req: Request, res: Response): Promise<Response> => {
        const id = req.params.id

        const response = await this.carServices.updateCar(req.body, id)

        return res.status(200).json(response)
    }

    delete = async (req: Request, res: Response): Promise<Response> => {
        const id = req.params.id

        const response = await this.carServices.deleteCar(id)

        return res.status(204).json(response)
    }
}