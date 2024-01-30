"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Import the functions you need from the SDKs you need
const app_1 = require("firebase/app");
const firestore_1 = require("firebase/firestore");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBiaNszGo9unbL5aymazRk6vwaVcZblPKE",
    authDomain: "recomendacionpelicula.firebaseapp.com",
    projectId: "recomendacionpelicula",
    storageBucket: "recomendacionpelicula.appspot.com",
    messagingSenderId: "221562378449",
    appId: "1:221562378449:web:324ce42d3588360e66cdf0",
    measurementId: "G-H18L2V9QN9"
};
// Initialize Firebase
const app = (0, app_1.initializeApp)(firebaseConfig);
// Initialize Firebase
const db = (0, firestore_1.getFirestore)(app);
exports.default = db;
//# sourceMappingURL=firebase.js.map