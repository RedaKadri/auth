import { validateRequest } from '@/lib/auth';
import { redirect } from 'next/navigation';

export default async function Home() {
	const { user } = await validateRequest();
	if (!user) {
		return redirect('/sign-in');
	}

	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			<h1 className='text-2xl font-bold'>Welcome {user.username} </h1>
		</main>
	);
}
