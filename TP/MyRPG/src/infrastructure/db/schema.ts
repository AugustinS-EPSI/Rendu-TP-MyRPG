import { text, pgTable, serial, integer} from "drizzle-orm/pg-core";

export const players = pgTable("players", {
  id: serial("id").primaryKey(),
  email: text("email").notNull(),
  name: text("name").notNull(),
});

export const characters = pgTable("characters", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  xp: integer("xp").notNull(),
  classId: integer("class_id").notNull(),
  playerId: integer("player_id").notNull(),
});

export const classes = pgTable("classes", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  power: integer("power").notNull(),
  hp: integer("hp").notNull(),
});

export const monsters = pgTable("monsters", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  power: integer("power").notNull(),
  hp: integer("hp").notNull(),
});


export const fights = pgTable("fights", {
  id: serial("id").primaryKey(),
  playerId: integer("player_id").notNull(),
  currentTurn: text("current_turn").notNull(),
  turn: integer("turn").notNull(),
  charactersHP: integer("characters_hp").notNull(),
  monstersHP: integer("monsters_hp").notNull(),
  playerActions: text("player_actions"),
  monsterActions: text("monster_actions"),
  status: text("status").notNull(),
});