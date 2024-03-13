import { z } from "zod"
import { carCreateSchema, carSchema, carUpdateSchema } from "../schemas/car.schemas"

export type TCarBody = z.infer<typeof carSchema>

export type TCarCreate = z.infer<typeof carCreateSchema>

export type TCarUpdate = z.infer<typeof carUpdateSchema>

