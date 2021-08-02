var firebaseConfig = {
  apiKey: "AIzaSyCQUZfgP5EYuHvXssuGhMYV4AxqQ8gBKz8",
  authDomain: "clocking-system-fefe1.firebaseapp.com",
  projectId: "clocking-system-fefe1",
  storageBucket: "clocking-system-fefe1.appspot.com",
  messagingSenderId: "631416410393",
  appId: "1:631416410393:web:afcf486d550181567fb588",
  measurementId: "G-JVN6KLY2W2",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

console.log(db);
