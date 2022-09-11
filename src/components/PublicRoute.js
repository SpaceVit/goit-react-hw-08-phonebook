import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function PublicRoute({
  restricted,
  redirectPath = '/',
  children,
}) {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  if (isLoggedIn && restricted) {
    return <Navigate to={redirectPath} replace />;
  }
  return children ? children : <Outlet />;
}
