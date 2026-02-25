import { DefaultSession } from '@auth/sveltekit';

declare module '@auth/sveltekit' {
	interface Session {
		accessToken?: string;
		user: {
			id?: string;
		} & DefaultSession['user'];
	}
}

declare module '@auth/core/jwt' {
	interface JWT {
		accessToken?: string;
		expires?: number;
		refreshToken?: string;
		userId?: string;
		username?: string;
	}
}
