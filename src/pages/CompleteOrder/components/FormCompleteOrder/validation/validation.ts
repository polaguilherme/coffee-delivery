import * as z from "zod";

export const formCompleteOrderValidtionSchema = z.object({
  cep: z
    .string()
    .min(8, "CEP deve ter 8 caracteres")
    .max(8, "CEP deve ter 8 caracteres"),
  street: z.string().min(1, "Informe sua Rua"),
  number: z.string().optional(),
  neighborhood: z.string().min(1, "Informe seu Bairro"),
  city: z.string().min(1, "Informe sua cidade"),
  state: z.string().min(1, "Informe sua cidade"),
  complement: z.string().optional(),
});
