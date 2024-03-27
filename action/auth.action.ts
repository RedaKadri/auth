'use server';
import { z } from 'zod';
import { SignInSchema, SignUpSchema } from '../types';
import { generateId } from 'lucia';
import { cookies } from 'next/headers';
import db from '@/lib/db';
import { userTable } from '@/lib/db/schema';
import { lucia } from '@/lib/auth';
import { Argon2id } from 'oslo/password';

export const signUp = async (values: z.infer<typeof SignUpSchema>) => {
	const hashPassword = await new Argon2id().hash(values.password);
	const userId = generateId(15);

	try {
		await db.insert(userTable).values({
			id: userId,
			username: values.username,
			hashPassword,
		});

		const session = await lucia.createSession(userId, {
			expiresIn: 60 * 60 * 24 * 30,
		});

		const sessionCookie = lucia.createSessionCookie(session.id);

		cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);

		return {
			success: true,
			data: {
				userId,
			},
		};
	} catch (error: any) {
		return {
			error: error?.message,
		};
	}
};
