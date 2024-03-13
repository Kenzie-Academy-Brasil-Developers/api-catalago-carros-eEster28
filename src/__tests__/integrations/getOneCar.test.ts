import { prisma } from "../../database/prisma"
import { carCreateBodyMock, carMock, invalidCarId } from "../__mocks__/car.mocks"
import { carDefaultExpects } from "../utils/carDefaultExpects"
import { request } from "../utils/request"

describe("Integration test: get one cars", () => {
    test("should be able to get one car successfully", async () => {
        const car = await prisma.car.create({ data: carCreateBodyMock })

        const data = await request
            .get(`/cars/${car.id}`)
            .expect(200)
            .then((response) => response.body)

        carDefaultExpects(data, carCreateBodyMock)
    })

    test("should throw error when car is invalid", async () => {
        const data = await request
            .patch(`/cars/${invalidCarId}`)
            .expect(404)
            .then((response) => response.body)

        expect(data.message).toStrictEqual("Car not found.")
    })
})

