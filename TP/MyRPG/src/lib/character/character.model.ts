import { characters } from "../../infrastructure/db/schema";
import { z } from "zod";

export const CharacterSchema = z.object({
  id: z.number(),
  name: z.string().min(2),
  xp: z.number().int(),
  classId: z.number(),
  playerId: z.number(),
});

export type Character = typeof characters.$inferSelect;

export const CreateCharacterSchema = CharacterSchema.omit({});
export type CreateCharacter = z.infer<typeof CreateCharacterSchema>;
