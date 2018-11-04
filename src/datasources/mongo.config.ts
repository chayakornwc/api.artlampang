import * as dotenv from "dotenv";
dotenv.config({ path: `.env.prod` });
dotenv.load();

export const name = 'mongodb';
export const connector = 'mongodb';
export const url = process.env.MONGO_URI
export const host = process.env.MONGO_HOST
export const port = process.env.MONGO_PORT
export const user = process.env.MONGO_USER
export const password = process.env.MONGO_PWD
export const database = process.env.MONGO_DBNAME
