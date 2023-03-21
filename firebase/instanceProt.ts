import { initFirestore } from "@next-auth/firebase-adapter"
import { cert } from "firebase-admin/app"

export const instanceProt = initFirestore({
 credential: cert({
   projectId: process.env.FIREBASE_PROJECT_ID,
   clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
   privateKey: process.env.FIREBASE_PRIVATE_KEY 
   ? process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/gm, "\n")
   : undefined,
 })
})