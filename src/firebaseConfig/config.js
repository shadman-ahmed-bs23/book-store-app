import firebase from "firebase/app"; 
import "firebase/firestore"; 

var firebaseConfig = {
  apiKey: "AIzaSyBOJA9_13tyIeHkC7d-cezcesyHX-0EiFc",
  authDomain: "book-store-4130e.firebaseapp.com",
  databaseURL: "https://book-store-4130e.firebaseio.com",
  projectId: "book-store-4130e",
  storageBucket: "book-store-4130e.appspot.com",
  messagingSenderId: "937043650657",
  appId: "1:937043650657:web:1140e02e9a434db0bea220"
};
// Initialize Firebase
const fireConfig = firebase.initializeApp(firebaseConfig); 

export default fireConfig; 