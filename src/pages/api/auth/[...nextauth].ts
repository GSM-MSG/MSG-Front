import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.CLIENT_ID || "",
      clientSecret: process.env.CLIENT_PW || "",
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      const idToken = {
        sub: profile.sub,
        email: profile.email,
        name: profile.name,
        picture: profile.picture,
        given_name: profile.given_name,
        iat: profile.iat,
        exp: profile.exp,
      };
      return true;
    },
    async redirect({ baseUrl, url }) {
      return "/";
    },
  },
  secret: process.env.JWT_SECRET,
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
});
