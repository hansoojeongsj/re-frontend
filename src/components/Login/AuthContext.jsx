import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const AuthContext = createContext();

export const AuthProvider = (props) => {
  const { children } = props;

  // 초기 상태는 서버로부터 받아온 사용자 정보와 로그인 여부를 사용
  const [isLoggedIn, setLoggedIn] = useState(/* 서버에서 받아온 초기 로그인 상태 */);
  const [userProfile, setUserProfile] = useState(/* 서버에서 받아온 초기 사용자 정보 */);

  const login = () => {
    // Perform your login logic here
    setLoggedIn(true);
  };

  const logout = () => {
    // Perform your logout logic here
    setLoggedIn(false);
    // 추가: 로그아웃 시 사용자 정보 초기화
    setUserProfile({});
  };

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