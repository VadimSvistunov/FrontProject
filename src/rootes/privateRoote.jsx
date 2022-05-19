import { Route, Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function PrivateRoute({ children, ...rest }) {
  let auth = useAuth();
  const navigate = useNavigate();
  return (
    <Route
      {...rest}
      render={({ location }) => {
        const url = new URLSearchParams();
        url.set("redirect", location.pathname + location.search);

        return auth.user ? (
          children
        ) : (
          navigate('/login')
        );
      }}
    />
  );
}

export default PrivateRoute;