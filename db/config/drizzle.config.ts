import type { Config } from 'drizzle-kit';
import {databaseConnectionParameters} from "@db/config/parameters";

export default {
    schema: 'db/schema/*',
    out: 'db/migrations',
    driver: 'pg',
    dbCredentials: databaseConnectionParameters,
    verbose: true,
    strict: true,
} satisfies Config;