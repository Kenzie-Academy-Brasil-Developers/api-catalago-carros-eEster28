import { z } from "zod";
import { carCreateSchema, carSchema, carUpdateSchema } from "../schemas/car.schemas";

export type TCarSchema = z.infer<typeof carSchema>

export type TCarCreateSchema = z.infer<typeof carCreateSchema>

export type TCarUpdateSchema = z.infer<typeof carUpdateSchema>

