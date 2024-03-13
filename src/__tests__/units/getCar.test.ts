import { CarServices } from "../../services/car.services"
import { carListMock } from "../__mocks__/car.mocks"
import { prismaMock } from "../__mocks__/prisma"

describe("Unit test: get car", () => {
   test("get cars should work correctly", async () => {
      
      const carServices = new CarServices()

      prismaMock.car.findMany.mockResolvedValue(carListMock)

      const data = await carServices.getCars()

      expect(data).toHaveLength(2)
      expect(data[0]).toStrictEqual(carListMock[0])
      expect(data[1]).toStrictEqual(carListMock[1])
   })
})

