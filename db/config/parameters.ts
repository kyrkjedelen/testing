import "dotenv"
import * as process from "node:process";
import {ClientConfig} from "pg";

const enviromentVariables = process.env;

interface databaseConnectionParameterInterface {
    host: string;
    database: string;
    user: string;
    password: string;
    ssl: boolean;
}

if(!enviromentVariables.DATABASE_HOST) {
    throw new Error('Missing DATABASE_HOST');
}
if(!enviromentVariables.DATABASE_NAME) {
    throw new Error('Missing DATABASE_NAME');
}
if(!enviromentVariables.DATABASE_USER) {
    throw new Error('Missing DATABASE_USER');
}
if(!enviromentVariables.DATABASE_PASSWORD) {
    throw new Error('Missing DATABASE_PASSWORD');
}

export const databaseConnectionParameters: databaseConnectionParameterInterface =  {
    host: enviromentVariables.DATABASE_HOST,
    database: enviromentVariables.DATABASE_NAME,
    user: enviromentVariables.DATABASE_USER,
    password: enviromentVariables.DATABASE_PASSWORD,
    ssl: true,
};

/*
    Possible parameters: (updated by Vegard at 10.4.24 from https://node-postgres.com/apis/client)
    user?: string, // default process.env.PGUSER || process.env.USER
    password?: string or function, //default process.env.PGPASSWORD
    host?: string, // default process.env.PGHOST
    database?: string, // default process.env.PGDATABASE || user
    port?: number, // default process.env.PGPORT
    connectionString?: string, // e.g. postgres://user:password@host:5432/database
    ssl?: any, // passed directly to node.TLSSocket, supports all tls.connect options
    types?: any, // custom type parsers
    statement_timeout?: number, // number of milliseconds before a statement in query will time out, default is no timeout
    query_timeout?: number, // number of milliseconds before a query call will timeout, default is no timeout
    application_name?: string, // The name of the application that created this Client instance
    connectionTimeoutMillis?: number, // number of milliseconds to wait for connection, default is no timeout
    idle_in_transaction_session_timeout?: number // number of milliseconds before terminating any session with an open idle transaction, default is no timeout
*/