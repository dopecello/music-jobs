import { FirestoreAdapter } from "@next-auth/firebase-adapter";
import NextAuth from "next-auth/next";
import LinkedInProvider from "next-auth/providers/linkedin";
import { instanceProt } from "../../../firebase/instanceProt";

export const authOptions = {
    providers: [
        LinkedInProvider({
            clientId: process.env.LINKEDIN_CLIENT_ID!,
            clientSecret: process.env.LINKEDIN_CLIENT_SECRET!
        })
    ],
    adapter: FirestoreAdapter(instanceProt),
    pages: {
        signIn: "/auth/accessv2"
    }
}

export default NextAuth(authOptions)