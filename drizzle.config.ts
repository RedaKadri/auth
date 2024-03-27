/** @type { import("drizzle-kit").Config } */
export default {
	schema: './lib/db/schema.ts',
	driver: 'mysql2',
	out: '/drizzle',
	dbCredentials: {
		host: '127.0.0.1',
		port: 3306,
		user: 'root',
		password: '',
		database: 'nextdemo',
	},
};
