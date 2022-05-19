import { createContext } from "react";

export const AuthContext = createContext({
  isLoaded: false,
  user: null,
  token: null,
  isAdmin: false,
  setUser: () => {},
  setToken: () => {},
  logOut: () => {},
});