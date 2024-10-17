import { createContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const logIn = (user) => {
    if (user === 'admin') {
      setUser({ name: user, permissions: ['update_product'] });
    } else {
      setUser({ name: user, permissions: ['read_product'] });
    }
    navigate(location.state?.path || '/react-products-school/user');
  };

  const logOut = () => {
    setUser(null);
    navigate('/react-products-school/');
  };

  return <UserContext.Provider value={{ user, logIn, logOut }}>{children}</UserContext.Provider>;
};
