// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBSuXhJ9DgS3RDyrXZE3vKWgo158dzs-EM",
//   authDomain: "bistro-boss-f74c9.firebaseapp.com",
//   projectId: "bistro-boss-f74c9",
//   storageBucket: "bistro-boss-f74c9.appspot.com",
//   messagingSenderId: "791489744838",
//   appId: "1:791489744838:web:2e57507a5f06638ba42cc7"
// };

const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);