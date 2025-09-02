import { integer, real, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const location = sqliteTable("location", {
  id: integer().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  slug: text(),
  description: text().notNull(),
  latitude: real().notNull(),
  longitude: real().notNull(),
  createdAt: integer("created_at").notNull().$defaultFn(() => Date.now()),
  updatedAt: integer("updated_at").notNull().$defaultFn(() => Date.now()).$onUpdate(() => Date.now()),
});
