import "dotenv"
import * as process from "node:process";

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

let enableSSL: boolean
switch (enviromentVariables.DATABASE_ENABLE_SSL) {
    case 'true': {
        enableSSL = true;
        break;
    }
    case 'false': {
        enableSSL = false;
        break;
    }
    default: {
        throw new Error('Error while getting DATABASE_ENABLE_SSL, must be true or false.');
    }
}

export const databaseConnectionParameters: databaseConnectionParameterInterface =  {
    host: enviromentVariables.DATABASE_HOST,
    database: enviromentVariables.DATABASE_NAME,
    user: enviromentVariables.DATABASE_USER,
    password: enviromentVariables.DATABASE_PASSWORD,
    ssl: enableSSL,
};