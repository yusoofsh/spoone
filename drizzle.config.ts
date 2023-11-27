import { type Config } from "drizzle-kit";
import { env } from "@/lib/env";

export default {
  schema: "lib/server/db/schema.ts",
  out: "lib/server/db/migrations",
  driver: "pg",
  dbCredentials: { connectionString: env.POSTGRES_URL },
} satisfies Config;
