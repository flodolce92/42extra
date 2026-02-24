import type { FortyTwoUser, FortyTwoEvent } from '$lib/types/fortytwo';

export async function get42UserData(
	accessToken: string,
): Promise<FortyTwoUser> {
	const response = await fetch('https://api.intra.42.fr/v2/me', {
		headers: {
			Authorization: `Bearer ${accessToken}`,
		},
	});

	if (!response.ok) throw new Error('42 API Error');

	return await response.json();
}

export async function getUserEvents(
	userId: string,
	accessToken: string,
): Promise<FortyTwoEvent[]> {
	const response = await fetch(
		'https://api.intra.42.fr/v2/users/' +
			userId +
			'/events?sort=begin_at&filter[future]=true',
		{
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		},
	);

	if (!response.ok) throw new Error('42 API Error');

	return await response.json();
}

export async function getCampusEvents(
	campusId: number,
	accessToken: string,
): Promise<FortyTwoEvent[]> {
	const response = await fetch(
		'https://api.intra.42.fr/v2/campus/' +
			campusId +
			'/events?sort=begin_at&filter[future]=true',
		{
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		},
	);

	if (!response.ok) throw new Error('42 API Error');

	return await response.json();
}
