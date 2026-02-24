import { FORTY_TWO_SCHOOL_CLIENT_ID, FORTY_TWO_SCHOOL_CLIENT_SECRET } from "$env/static/private"
import { SvelteKitAuth } from "@auth/sveltekit"
import FortyTwo from "@auth/sveltekit/providers/42-school"

export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [
    FortyTwo({
      clientId: FORTY_TWO_SCHOOL_CLIENT_ID,
      clientSecret: FORTY_TWO_SCHOOL_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async jwt({ token, account, profile }) {
      if (account && profile) {
        token.accessToken = account.access_token;
        token.userId = profile.id;
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      session.user.id = token.userId as string;
      return session;
    },
  },
})
