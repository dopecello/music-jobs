import admin from "firebase-admin"
const serviceAccount = require("./serviceAcct.json");

export const initializeAdmin = () => {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    })
};

export const uid = "some-uid-that-you-are-getting-from-provider"

export const sendCustomToken = () => {
    admin.auth().createCustomToken(uid).then((customToken) => {
        console.log(customToken)
    }).catch((error) => {
        console.log("there was an error generating the custom token:", error)
    })
}
