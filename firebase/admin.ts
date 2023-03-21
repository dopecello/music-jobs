import admin from "firebase-admin"
const serviceAccount = require("./serviceAcct.json");

export const initializeAdmin = () => {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    })
};
