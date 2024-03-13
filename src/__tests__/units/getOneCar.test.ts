import { CarServices } from "../../services/car.services"
import { carMock } from "../__mocks__/car.mocks"
import { prismaMock } from "../__mocks__/prisma"

describe("Unit test: delete car", () => {
    test("delete car should work correctly", async () => {
        
        const carServices = new CarServices()

        prismaMock.car.findFirst.mockResolvedValue(carMock)

        const data = await carServices.getOneCar(carMock.id)

        expect(data).toStrictEqual(carMock)
    })
})