// generate drizzle config

import { defineConfig } from "drizzle-kit";

import env from "./app/lib/env";

export default defineConfig({
  schema: "./app/db/schema",
  out: "./app/db/migrations",
  casing: "snake_case",
  dialect: "turso",
  dbCredentials: {
    url: env.TURSO_DATABASE_URL,
    authToken: env.NODE_ENV === "development" ? undefined : env.TURSO_AUTH_TOKEN,

  },
});
