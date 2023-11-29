import * as L from './LoginStyle';
import LogoImage from './logo.png';
import * as C from './../Main/ContainerStyle';
import { Link, useNavigate } from 'react-router-dom'; // useNavigate instead of useHistory
import { useState } from 'react';
import { useAuth } from './AuthContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // useNavigate instead of useHistory
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
    
      if (response.ok && data.code === 200) {
        // 토큰 위치와 구조에 따라 수정
        const authToken = data.result.jwt;
  
        if (authToken) {
          localStorage.setItem('authToken', authToken);
          login();
          toast.success('로그인 성공!', {
            autoClose: 3000,
            position: toast.POSITION.TOP_CENTER,
          });
          navigate('/');
          console.log('Your Auth Token:', authToken);

        } else {
          console.error('로그인 실패: 토큰이 정상적으로 반환되지 않았습니다.');
          toast.error('로그인 실패. 이메일과 비밀번호를 확인해 주세요', {
            autoClose: 3000,
            position: toast.POSITION.TOP_CENTER,
          });
        }
      } else {
        console.error('로그인 실패:', data);
        toast.error('로그인 실패. 이메일과 비밀번호를 확인해 주세요', {
          autoClose: 3000,
          position: toast.POSITION.TOP_CENTER,
        });
      }
    } catch (error) {
      console.error('Error during login:', error);
      toast.error('로그인 중 에러가 발생했습니다. 다시 시도해 주세요', {
        autoClose: 3000,
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };
  

  return (
    <C.Container>
      <C.WhiteBox>
        <L.ContentContainer>
          <L.BackButton as={Link} to="/">⬅ BACK TO MENU</L.BackButton>
          <L.LogoContainer>
            <L.LogoImage src={LogoImage} alt="로고" />
          </L.LogoContainer>

          <L.Title>LogIn</L.Title>
          <L.IvoryBox>
            <L.LoginRow>
              <L.LoginContent>EMAIL</L.LoginContent>
              <L.InputBox
                type="email"
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

            <L.LoginButton
              onClick={handleLogin}
              disabled={!email || !password}
            >
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
