import mysql from 'mysql2/promise';
import { MySql2Database, drizzle } from 'drizzle-orm/mysql2';
import * as schema from './schema';

const pool = mysql.createPool({
	host: '127.0.0.1',
	port: 3306,
	user: 'root',
	password: '',
	database: 'nextdemo',
});

const db: MySql2Database<typeof schema> = drizzle(pool, { mode: 'default', schema });
export default db;
