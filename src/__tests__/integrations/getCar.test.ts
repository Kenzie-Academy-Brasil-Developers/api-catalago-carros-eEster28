import { prisma } from "../../database/prisma"
import { carCreateBodyListMock } from "../__mocks__/car.mocks"
import { carDefaultExpects } from "../utils/carDefaultExpects"
import { request } from "../utils/request"

describe("Integration test: get cars", () => {
   test("should be able to get cars successfully", async () => {
      await prisma.car.createMany({ data: carCreateBodyListMock })

      const data = await request
         .get("/cars")
         .expect(200)
         .then((response) => response.body)

      expect(data).toHaveLength(2)  

      carDefaultExpects(data[0], carCreateBodyListMock[0])
      carDefaultExpects(data[1], carCreateBodyListMock[1])
   })
})
