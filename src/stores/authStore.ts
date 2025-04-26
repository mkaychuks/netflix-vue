import { ref, computed } from "vue";
import { defineStore } from "pinia";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  type User,
} from "firebase/auth";
import { auth, db } from "@/firebase";
import { doc, setDoc } from "firebase/firestore";

export const useAuthStore = defineStore("authCounter", () => {
  const user = ref<User | null>(null);

  // logout from firebase
  const logout = () => {
    return signOut(auth);
  };

  // login function from firebase
  const login = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // create a user account
  const signUp = (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password);
    setDoc(doc(db, "users", email), {
      savedShows: [],
    });
  };

  // check for current User
  const initAuth = async () => {
    await onAuthStateChanged(auth, (currentUser) => {
      user.value = currentUser;
    });
  };

  return { user, logout, login, signUp, initAuth };
});
