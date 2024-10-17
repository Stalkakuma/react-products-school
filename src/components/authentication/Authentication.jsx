import { useContext } from 'react';
import { UserContext } from '../../store/UserContext';
import { Navigate } from 'react-router-dom';

const Authentication = ({ children }) => {
  const { user } = useContext(UserContext);
  if (!user) {
    return <Navigate to="/react-products-school/user" />;
  }

  return children;
};

export default Authentication;
