import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types'; // prop-types import 추가

const AuthContext = createContext();

export const AuthProvider = (props) => {
  const { children } = props;

  const [isLoggedIn, setLoggedIn] = useState(false);

  const login = () => {
    // Perform your login logic here
    setLoggedIn(true);
  };

  const logout = () => {
    // Perform your logout logic here
    setLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useAuth = () => {
  return useContext(AuthContext);
};
