import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDNJKiQ-Njm0IyCZcRtLoDKIgDRWQ1BagY",
  authDomain: "tempest-e-commerce-1.firebaseapp.com",
  projectId: "tempest-e-commerce-1",
  storageBucket: "tempest-e-commerce-1.firebasestorage.app",
  messagingSenderId: "594774254137",
  appId: "1:594774254137:web:24468ae4ba18b5cb0463e8"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)