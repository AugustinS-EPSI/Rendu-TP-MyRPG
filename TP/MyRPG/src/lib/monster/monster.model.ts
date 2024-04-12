import { monsters } from "../../infrastructure/db/schema";
import { z } from "zod";

export const MonsterSchema = z.object({
  id: z.number(),
  name: z.string().min(2),
  power: z.number().int(),
  hp: z.number().int(),
});

export type Monster = typeof monsters.$inferSelect;

export const CreateMonsterSchema = MonsterSchema.omit({});
export type CreateMonster = z.infer<typeof CreateMonsterSchema>;
