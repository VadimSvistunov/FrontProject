import { Route, Navigate, useNavigate, Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function GuestRoute({ children, ...rest }) {
  const auth = useAuth();
  const navigate = useNavigate();

  return (
    <Route
      {...rest}
      render={() => {
        const url = new URLSearchParams(navigate.location.search.slice(1));

        return auth.user ? (
          navigate('/')
        ) : (
          children
        );
      }}
    />
  );
}

export default GuestRoute;