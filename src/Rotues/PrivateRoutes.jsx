import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import PropTypes from "prop-types";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading)
    return (
      <h1 className="text-4xl font-bold text-center my-20">Loading.....</h1>
    );
  if (user) return children;

  return <Navigate to="/login" state={location.pathname}></Navigate>;
};

export default PrivateRoutes;
PrivateRoutes.propTypes = {
  children: PropTypes.node,
};
