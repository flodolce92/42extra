import {
	FORTY_TWO_SCHOOL_CLIENT_ID,
	FORTY_TWO_SCHOOL_CLIENT_SECRET,
} from '$env/static/private';
import { SvelteKitAuth } from '@auth/sveltekit';
import FortyTwo from '@auth/sveltekit/providers/42-school';

export const { handle, signIn, signOut } = SvelteKitAuth({
	providers: [
		FortyTwo({
			clientId: FORTY_TWO_SCHOOL_CLIENT_ID,
			clientSecret: FORTY_TWO_SCHOOL_CLIENT_SECRET,
		}),
	],
	callbacks: {
		async jwt({ token, account, profile }) {
			// console.log("JWT callback called with:", { token, account, profile });
			if (account && profile) {
				token.accessToken = account.access_token;
				token.expires = account.expires_at;
				token.refreshToken = account.refresh_token;
				token.userId = profile.id ?? undefined;
				token.username = profile.login as string;
			}

			// access token has not expired yet
			if (token.expires && Date.now() / 1000 < token.expires) return token;

			// access token has expired, logout
			return {
				...token,
				accessToken: undefined,
				expires: undefined,
				refreshToken: undefined,
				userId: undefined,
				username: undefined,
			};
		},
		async session({ session, token }) {
			session.accessToken = token.accessToken;
			session.user.id = token.userId as string;
			return session;
		},
	},
});
