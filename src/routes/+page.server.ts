import { getUserEvents, getCampusEvents } from '$lib/server/fortytwo';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	const session = await event.locals.auth();

	if (!session?.accessToken || !session?.user.id) {
		return { userEvents: null, campusEvents: null };
	}

	try {
		const [userEvents, campusEvents] = await Promise.all([
			getUserEvents(session.user.id, session.accessToken),
			getCampusEvents(30, session.accessToken),
		]);

		return { userEvents, campusEvents };
	} catch (e) {
		throw error(500, 'Could not reach 42 API');
	}
};
