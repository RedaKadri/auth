import { DrizzleMySQLAdapter } from '@lucia-auth/adapter-drizzle';

import mysql from 'mysql2/promise';
import { drizzle } from 'drizzle-orm/mysql2';

const connection = mysql.createPool({
	host: '127.0.0.1',
	port: 3306,
	user: 'root',
	password: '',
	database: 'nextdemo',
});

const db = drizzle(connection, { mode: 'default' });

export default db;
