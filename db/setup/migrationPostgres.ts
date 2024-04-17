import { migrate } from 'drizzle-orm/postgres-js/migrator';
import {pgClient, database} from "@db/setup/queryPostgres";

await migrate(database, { migrationsFolder: 'db/migrations' });

await pgClient.end();