import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { UserContext } from '../../store/UserContext';
import { Unauthorized } from './Unauthorized';

const Authorization = ({ permissions }) => {
  const { user } = useContext(UserContext);

  if (user) {
    const userPermissions = user.permissions;
    const isAllowed = permissions.some((allowed) => userPermissions.includes(allowed));

    return isAllowed ? <Outlet /> : <Unauthorized />;
  }

  return <Navigate to="/react-products-school/user/" />;
};

export default Authorization;
