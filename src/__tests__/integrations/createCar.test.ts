import { carBodyInvalidMock, carCreateBodyMock } from "../__mocks__/car.mocks"
import { carDefaultExpects } from "../utils/carDefaultExpects"
import { request } from "../utils/request"

describe("Integration test: create car", ()=> {
    test("should be able to create a car successfully", async () => {
        const data = await request
        .post("/cars")
        .send(carCreateBodyMock)
        .expect(201)
        .then((response) => response.body)  

        carDefaultExpects(data, carCreateBodyMock)
    })

    test("should throw error when try to create a car with invalid data types", async () => {
       await request.post("/tasks").send(carBodyInvalidMock).expect(404)
    })
})

