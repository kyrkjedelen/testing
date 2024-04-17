import 'dotenv/config';
import {databaseConnectionParameters } from "@db/config/parameters";
import { usersSchema } from "@db/schema/users";
import pg from "pg";
const PgClient = pg.Client;
import { drizzle } from "drizzle-orm/node-postgres";

export const pgClient = new PgClient(databaseConnectionParameters);

await pgClient.connect();

export const database = drizzle(pgClient, { schema: { usersSchema: usersSchema } });