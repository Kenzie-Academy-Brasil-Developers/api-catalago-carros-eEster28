import { CarServices } from "../../services/car.services"
import { carMock, carUpdateMock } from "../__mocks__/car.mocks"
import { prismaMock } from "../__mocks__/prisma"


describe("Unit test: update car", () => {
    test("update car should work correctly", async () => {

        const carServices = new CarServices()

        const updatecar = { ...carMock, ...carUpdateMock}

        prismaMock.car.update.mockResolvedValue(updatecar)
        const data = await carServices.updateCar(carUpdateMock, carMock.id)

        expect(data).toStrictEqual(updatecar)
    })
})
