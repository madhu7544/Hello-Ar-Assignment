import { createContext } from "react";
import { useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  let [email] = useState("");
  let [role] = useState("admin");
  let [users] = useState(JSON.parse(localStorage.getItem("Users")));

  return (
    <AuthContext.Provider
      value={{
        email,
        role,
        users,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
