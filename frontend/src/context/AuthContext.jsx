import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {

  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);
  const [loading, setLoading] = useState(true);

  // ===============================
  // Cargar sesión al iniciar la app
  // ===============================
  useEffect(() => {

    const storedUser = localStorage.getItem("user");
    const storedAccess = localStorage.getItem("access");
    const storedRefresh = localStorage.getItem("refresh");

    if (storedUser && storedAccess && storedRefresh) {

      setUser(JSON.parse(storedUser));
      setAccessToken(storedAccess);
      setRefreshToken(storedRefresh);

    }

    setLoading(false);

  }, []);

  // ===============================
  // Login
  // ===============================
  const login = (userData, access, refresh) => {

    setUser(userData);
    setAccessToken(access);
    setRefreshToken(refresh);

    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("access", access);
    localStorage.setItem("refresh", refresh);

  };

  // ===============================
  // Logout
  // ===============================
  const logout = () => {

    setUser(null);
    setAccessToken(null);
    setRefreshToken(null);

    localStorage.removeItem("user");
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");

  };

  return (

    <AuthContext.Provider
      value={{
        user,
        accessToken,
        refreshToken,
        login,
        logout,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>

  );

}

export function useAuth() {
  return useContext(AuthContext);
}