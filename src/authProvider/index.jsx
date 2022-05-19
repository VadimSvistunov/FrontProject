import { useCallback, useEffect, useMemo, useState } from "react";
import Cookies from "js-cookie";
import { AuthContext } from "../hooks/AuthContext";
import api from "../services/allEndpoints";

function AuthProvider(props) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [user, setUser] = useState(null);
  const [token, setTokenData] = useState(null);
  const [isAdmin, setAdmin] = useState(false);
  const setToken = useCallback((tokenData) => {
    setTokenData(tokenData);

    if (tokenData) {
      Cookies.set("auth-token", tokenData);
    } else {
      Cookies.remove("auth-token");
    }
  }, []);

  const logOut = useCallback(() => {
    setUser(null);
    setToken(null);
    setAdmin(false);
    setIsLoaded(false);
  }, [setToken]);

  const loadData = useCallback(async () => {
    const tokenData = Cookies.get("auth-token");
    setTokenData(tokenData);

    try {
      if (tokenData) {
        const { data } = await api.auth.getProfile();
        if (data.email == 'admin@mail.ru') {
          setAdmin(true);
        }
        setUser(data);
      }
    } catch {
      setToken(null);
    } finally {
      setIsLoaded(true);
    }
  }, [setToken]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const contextValue = useMemo(
    () => ({
      isLoaded,
      user,
      token,
      isAdmin,
      setAdmin,
      setUser,
      setToken,
      logOut,
    }),
    [isLoaded, user, token, isAdmin, setAdmin, setToken, logOut]
  );

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;