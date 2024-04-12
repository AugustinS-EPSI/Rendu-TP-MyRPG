import { classes } from "../../infrastructure/db/schema";
import { z } from "zod";

export const ClasseSchema = z.object({
    id: z.number(),
    name: z.string().min(2),
    power: z.number().int(),
    hp: z.number().int(),
});

export type Classe = typeof classes.$inferSelect;

export const CreateClasseSchema = ClasseSchema.omit({});
export type CreateClasse = z.infer<typeof CreateClasseSchema>;
