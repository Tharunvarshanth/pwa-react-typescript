import { useContext, useState, createContext } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    username: "",
    permissions: [],
  });
  return <AuthContext.Provider value={{ user }}> {children}</AuthContext.Provider>;
};

export default AuthContext;
