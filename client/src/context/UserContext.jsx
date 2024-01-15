import { createContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const storedToken = localStorage.getItem("token");
  const [token, setToken] = useState(storedToken ? JSON.parse(storedToken) : null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const decoded = token ? jwtDecode(token) : null;
    localStorage.setItem("token", JSON.stringify(token));
    setUser(decoded);
  }, [token]);

  const data = {
    setToken,
    user,
  };

  return (
    <UserContext.Provider value={data}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
