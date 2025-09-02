import { drizzle } from "drizzle-orm/libsql";

import * as schema from "~/db/schema";
import env from "~/lib/env";

const db = drizzle({
  connection: {
    url: env.TURSO_DATABASE_URL,
    authToken: env.NODE_ENV === "development" ? undefined : env.TURSO_AUTH_TOKEN,
  },
  schema,
});

export default db;
