import { FirestoreAdapter } from "@next-auth/firebase-adapter";
import NextAuth from "next-auth/next";
import LinkedInProvider from "next-auth/providers/linkedin";
import GoogleProvider from "next-auth/providers/google"
import FacebookProvider from "next-auth/providers/facebook"
import { instanceProt } from "../../../firebase/instanceProt";

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID!,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET!
        }), //Will probably add Apple later once traffic increases
        LinkedInProvider({
            clientId: process.env.LINKEDIN_CLIENT_ID!,
            clientSecret: process.env.LINKEDIN_CLIENT_SECRET!
        }),
    ],
    adapter: FirestoreAdapter(instanceProt),
    pages: {
        signIn: "/auth/accessv2"
    }
}

export default NextAuth(authOptions)

