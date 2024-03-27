import { Lucia } from 'lucia';
import adapter from './db/schema';

export const lucia = new Lucia(adapter, {
	sessionCookie: {
		expires: false,
		attributes: {
			secure: process.env.NODE_ENV === 'production',
		},
	},
});

// IMPORTANT!
declare module 'lucia' {
	interface Register {
		Lucia: typeof lucia;
	}
}
