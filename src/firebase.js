import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCxtqvye_KLfEsqmtzlgbuoQtuB5ayDzbc",
  authDomain: "languageapp-42a7d.firebaseapp.com",
  projectId: "languageapp-42a7d",
  storageBucket: "languageapp-42a7d.appspot.com",
  messagingSenderId: "977008540920",
  appId: "1:977008540920:web:91ed3f1e0d4470c4348f0d",
  measurementId: "G-6ST8W2F1M6"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
