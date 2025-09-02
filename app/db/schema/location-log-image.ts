import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

import { locationLog } from "./index";

export const locationLogImage = sqliteTable("location_log_image", {
  id: integer().primaryKey({ autoIncrement: true }),
  key: text().notNull(),
  locationLogId: integer().notNull().references(() => locationLog.id),
  createdAt: integer().notNull().$defaultFn(() => Date.now()),
  updatedAt: integer().notNull().$defaultFn(() => Date.now()).$onUpdate(() => Date.now()),
});
