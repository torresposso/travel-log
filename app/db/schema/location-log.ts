import { integer, real, sqliteTable, text } from "drizzle-orm/sqlite-core";

import { location, user } from ".";

export const locationLog = sqliteTable("location_log", {
  id: integer().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  description: text().notNull(),
  startedAt: integer().notNull(),
  endedAt: integer().notNull(),
  latitude: real().notNull(),
  longitude: real().notNull(),
  locationId: integer().notNull().references(() => location.id),
  userId: integer().notNull().references(() => user.id),
  createdAt: integer().notNull().$defaultFn(() => Date.now()),
  updatedAt: integer().notNull().$defaultFn(() => Date.now()).$onUpdate(() => Date.now()),
});
