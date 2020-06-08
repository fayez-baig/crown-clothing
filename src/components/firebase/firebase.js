import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA1QRjlFTSCdKeAXgUeLjxd74JsxxWS14c",
  authDomain: "crwn-db-1ecd2.firebaseapp.com",
  databaseURL: "https://crwn-db-1ecd2.firebaseio.com",
  projectId: "crwn-db-1ecd2",
  storageBucket: "crwn-db-1ecd2.appspot.com",
  messagingSenderId: "916130250240",
  appId: "1:916130250240:web:bc535a000f2d227b45e2e5",
  measurementId: "G-BVM4JMRG2X",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,

        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
