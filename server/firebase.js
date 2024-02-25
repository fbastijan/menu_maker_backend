// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const { getStorage } = require("firebase/storage");
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6qBij1gOrvKivyXnlMjSLGt_Oz6qVm4U",
  authDomain: "testapp-53358.firebaseapp.com",
  projectId: "testapp-53358",
  storageBucket: "testapp-53358.appspot.com",
  messagingSenderId: "495479072394",
  appId: "1:495479072394:web:61b57b2f9a19a99e6eef73",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
module.exports = { storage };
