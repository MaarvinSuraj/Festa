import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyBoqrkjjOaAly5MD2Cd_hAldGLz6isMThM",
//     authDomain: "whatsapp-clone-2-372312.firebaseapp.com",
//     projectId: "whatsapp-clone-2-372312",
//     storageBucket: "whatsapp-clone-2-372312.appspot.com",
//     messagingSenderId: "225921394239",
//     appId: "1:225921394239:web:66e9a0b9cd976ec204ba8a"
//   };

const firebaseConfig = {
  apiKey: "AIzaSyA733O1C9BdgHYc1zJ1GJtyTbDlRap4SrE",
  authDomain: "chatapp-db-fb1f6.firebaseapp.com",
  projectId: "chatapp-db-fb1f6",
  storageBucket: "chatapp-db-fb1f6.appspot.com",
  messagingSenderId: "779898142714",
  appId: "1:779898142714:web:f7b33083764c47ef9d2e43",
  measurementId: "G-YTEH8R64B7"
};
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export { db }

  