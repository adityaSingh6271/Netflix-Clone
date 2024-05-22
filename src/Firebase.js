import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9flhqBV3CzUyleTfgldOvV89OI4u5luA",
  authDomain: "netflix-clone-a626b.firebaseapp.com",
  projectId: "netflix-clone-a626b",
  storageBucket: "netflix-clone-a626b.appspot.com",
  messagingSenderId: "10522640661",
  appId: "1:10522640661:web:e721323cdc1c46537e691c",
  measurementId: "G-6EST9F2ZHN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Sign up function
const signUp = async (name, email, password) => {
  try {
    // Create user with email and password
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;

    // Add user details to Firestore
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: 'local',
      email,
    });

    toast.success("User created successfully");
  } catch (error) {
    console.error("Sign Up Error:", error);
    toast.error(error.code.split('/')[1].split('-').join(" "));
  }
};

// Login function
const login = async (email, password) => {
  try {
    // Sign in user with email and password
    await signInWithEmailAndPassword(auth, email, password);
    toast.success("Logged in successfully");
  } catch (error) {
    console.error("Login Error:", error);
    toast.error(error.code.split('/')[1].split('-').join(" "));
  }
};

// Logout function
const logout = async () => {
  try {
    // Sign out user
    await signOut(auth);
    toast.success("Logged out successfully");
  } catch (error) {
    console.error("Logout Error:", error);
    toast.error("Failed to log out");
  }
};

export { auth, db, login, signUp, logout };
