import type { FortyTwoUser } from '$lib/types/fortytwo';

export async function get42UserData(accessToken: string): Promise<FortyTwoUser> {
  const response = await fetch("https://api.intra.42.fr/v2/me", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) throw new Error("42 API Error");

  return await response.json();
}
