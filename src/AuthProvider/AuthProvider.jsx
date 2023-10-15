import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { Children, createContext, useState } from "react";
import auth from "../AllComponent/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const userCreate = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const logInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  }

  const authInfo = { user, userCreate, logInUser };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
