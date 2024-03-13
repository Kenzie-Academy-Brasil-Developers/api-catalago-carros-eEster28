import { prisma } from "../../database/prisma"
import { 
    carBodyInvalidMock, 
    carCreateBodyMock, 
    carUpdateMock, 
    invalidCarId 
} 
from "../__mocks__/car.mocks"
import { request } from "../utils/request"

describe("Integration test: update car", () => {
   test("should be able to update a car succesfully", async () => {
      const car = await prisma.car.create({ data: carCreateBodyMock })

      const data = await request
         .patch(`/cars/${car.id}`)
         .send(carUpdateMock)
         .expect(200)
         .then((response) => response.body)

      const updateCar = { ...car, ...carUpdateMock }

      expect(data).toStrictEqual(updateCar)
   })
   
   test("should throw error when car is invalid", async () => {
      const data = await request
      .patch(`/cars/${invalidCarId}`)
      .expect(404)
      .then((response) => response.body)  
      
      expect(data.message).toStrictEqual("Car not found.")
   })
   
   test("should throw error when try to update a car with invalid data types", async () => {
      await request.post("/tasks").send(carBodyInvalidMock).expect(404)
   }) 
})

