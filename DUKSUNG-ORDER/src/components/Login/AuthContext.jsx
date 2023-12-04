import { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const AuthContext = createContext();

export const AuthProvider = (props) => {
  const { children } = props;

  // 초기 상태는 로컬 스토리지에서 값을 가져오거나 기본값으로 설정
  const initialLoggedInState = localStorage.getItem('isLoggedIn') === 'true';
  const [isLoggedIn, setLoggedIn] = useState(initialLoggedInState);

  const initialUserProfileState = JSON.parse(localStorage.getItem('userProfile')) || {};
  const [userProfile, setUserProfile] = useState(initialUserProfileState);

  const initialUserId = localStorage.getItem('userId') || null;  // 새로고침 이전 로그인 되었는지 확인
  const [userId, setUserId] = useState(initialUserId);

  useEffect(() => {
    const handleWindowClose = () => {
      // 창이 닫힐 때 로그아웃 로직 수행
      setLoggedIn(false);
      localStorage.removeItem('isLoggedIn');
      // 추가: 로그아웃 시 사용자 정보 초기화
      setUserProfile({});
      localStorage.removeItem('userProfile');
      setUserId(null);
      localStorage.removeItem('userId');
    };

    // 이벤트 리스너 등록
    window.addEventListener('beforeunload', handleWindowClose);

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      window.removeEventListener('beforeunload', handleWindowClose);
    };
  }, []);



  const login = () => {
    // 로그인 로직 수행
    setLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
  };

  const logout = () => {
    // 로그아웃 로직 수행
    setLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
    // 추가: 로그아웃 시 사용자 정보 초기화
    setUserProfile({});
    localStorage.removeItem('userProfile');
    setUserId(null);
    localStorage.removeItem('userId');
  };

  const updateUser = (userInfo) => {
    setUserProfile(userInfo);
    if (userInfo && userInfo.id) {
      setUserId(userInfo.id);
      localStorage.setItem('userId', userInfo.id);
    }
  };

  useEffect(() => {
    // Save changes to localStorage whenever the state changes
    localStorage.setItem('userProfile', JSON.stringify(userProfile));
  }, [userProfile]);

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, userProfile, updateUser, userId }}>
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
