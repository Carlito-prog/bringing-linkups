import axios from "axios";
import firebase from "firebase/compat/app";
import { formTypes } from "../../Page/ContactUs";

const firebaseConfig = {
  apiKey: `${process.env.API_KEY}`,
  authDomain: `${process.env.AUTH_DOMAIN}`,
  projectId: `${process.env.PROJECT_ID}`,
  storageBucket: `${process.env.STORAGE_BUCKET}`,
  messagingSenderId: `${process.env.MSG_SENDER_ID}`,
  appId: `${process.env.APP_ID}`,
  measurementId: `${process.env.MEASUREMENT_ID}`
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

export const sendData = async (formData:formTypes) => {
  try {
    await db.collection('Contacts').add(formData).then(async()=>{
      try {
        await axios.post("/api/send-email", formData);
      } catch (error) {
        console.error("Error sending email", error);
      }
    });
    console.log('Data saved successfully');
  } catch (error) {
    console.error('Error saving data: ', error);
  }
};

