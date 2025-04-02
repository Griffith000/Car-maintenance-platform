import { ZodSchema } from "zod";

export const validate = <T>(schema: ZodSchema<T>, data: unknown): T => {
  try { 
    return schema.parse(data);
  } catch(error){
    console.log("Invalid input format!");
    throw new Error(JSON.stringify(error))
  }
}
