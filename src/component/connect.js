import { initializeApp } from "firebase/app";
import { getDatabase, ref } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyAKa4y5c54GmXEMnRx-y6rdqsJM6WRnXAI",
  authDomain: "buoi10-eb9bb.firebaseapp.com",
  databaseURL: "https://buoi10-eb9bb-default-rtdb.firebaseio.com",
  projectId: "buoi10-eb9bb",
  storageBucket: "buoi10-eb9bb.appspot.com",
  messagingSenderId: "653819830133",
  appId: "1:653819830133:web:baf4426e3d855299d23d3c",
  measurementId: "G-K26V95WWK7"
};

const connect = initializeApp(firebaseConfig);
const db = getDatabase(connect);
const database = ref(db,'note/')
export const dataNote = database;