import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./src/db/migrations",
  schema: "./src/db/schema.ts",
  dialect: "turso",
  dbCredentials: {
    url: process.env.DATABASE_URL!, // use DATABASE_URL directly from GitHub Actions
  },
});
