import * as L from './LoginStyle';
import LogoImage from './logo.png';
import * as C from './../Main/ContainerStyle';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from './AuthContext'; // AuthContext의 useAuth 훅 import

export default function Login() {
  const { login } = useAuth(); // isLoggedIn 변수를 사용하지 않으므로 제거
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:3000/app/login', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
  
      const data = await response.json();
  
      // 여기서 서버로부터 받은 응답을 확인하고 로그인 처리를 할 수 있습니다.
      if (response.ok) {
        // 로그인 성공 시
        const { authToken } = data; // authToken이 응답 데이터에 있는 경우
        // authToken을 localStorage에 저장
        localStorage.setItem('authToken', authToken);
  
        // 로그인 상태를 갱신
        login();
      } else {
        // 로그인 실패 시
        console.error('Login failed:', data);
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };
  
  return (
    <C.Container>
      <C.WhiteBox>
        <L.ContentContainer>
          <a href="/">
            <L.BackButton>⬅ BACK TO MENU</L.BackButton>
          </a>
          <L.LogoContainer>
            <L.LogoImage src={LogoImage} alt="로고" />
          </L.LogoContainer>

          <L.Title>LogIn</L.Title>
          <L.IvoryBox>
            <L.LoginRow>
              <L.LoginContent>EMAIL</L.LoginContent>
              <L.InputBox
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </L.LoginRow>
            <L.LoginRow>
              <L.LoginContent>PASSWORD</L.LoginContent>
              <L.InputBox
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </L.LoginRow>

            <L.LoginButton onClick={handleLogin} as={Link} to="/">
              LogIn
            </L.LoginButton>
          </L.IvoryBox>
          <L.SigninButton as={Link} to="/signin">
            회원가입
          </L.SigninButton>
        </L.ContentContainer>
      </C.WhiteBox>
    </C.Container>
  );
}
