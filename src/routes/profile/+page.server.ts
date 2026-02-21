import { get42UserData } from '$lib/server/fortytwo';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	const session = await event.locals.auth();

	if (!session?.accessToken) {
		return { userStats: null };
	}

	try {
		const data = await get42UserData(session.accessToken);

		return { userStats: data };
	} catch (e) {
		throw error(500, 'Could not reach 42 API');
	}
};
