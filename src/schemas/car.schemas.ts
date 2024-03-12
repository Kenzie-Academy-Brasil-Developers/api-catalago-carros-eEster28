import { z } from "zod"

export const carSchema = z.object({
    id: z.string(),
    name: z.string().min(1) ,
    description: z.string().min(1).nullish(),
    brand: z.string().min(1) ,
    year: z.number().positive() ,
    km: z.number().positive()
})

export const carCreateSchema = carSchema.omit({id:true})

export const carUpdateSchema = carCreateSchema.partial()