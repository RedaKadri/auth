import { DrizzleMySQLAdapter } from '@lucia-auth/adapter-drizzle';
import { mysqlTable, varchar, datetime, text } from 'drizzle-orm/mysql-core';
import db from '.';

export const userTable = mysqlTable('user', {
	id: varchar('id', {
		length: 255,
	}).primaryKey(),
	username: varchar('username', { length: 50 }).notNull().unique(),
	hashPassword: text('hash_password').notNull(),
});

export const sessionTable = mysqlTable('session', {
	id: varchar('id', {
		length: 255,
	}).primaryKey(),
	userId: varchar('user_id', {
		length: 255,
	})
		.notNull()
		.references(() => userTable.id),
	expiresAt: datetime('expires_at').notNull(),
});

const adapter = new DrizzleMySQLAdapter(db, sessionTable, userTable);

export default adapter;