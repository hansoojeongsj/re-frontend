import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const AuthContext = createContext();

export const AuthProvider = (props) => {
  const { children } = props;

  const [isLoggedIn, setLoggedIn] = useState(false);
  const [userProfile, setUserProfile] = useState({}); // 추가: 사용자 정보를 저장할 상태

  const login = () => {
    // Perform your login logic here
    setLoggedIn(true);
  };

  const logout = () => {
    // Perform your logout logic here
    setLoggedIn(false);
  };

  // 추가: 사용자 정보 업데이트 함수
  const updateUser = (userInfo) => {
    setUserProfile(userInfo);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, userProfile, updateUser }}>
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