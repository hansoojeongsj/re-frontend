import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as L from '../Login/LoginStyle';
import LogoImage from './../Login/logo.png';
import * as C from './../Main/ContainerStyle';
import axios from 'axios';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phonenum, setPhonenum] = useState('');
  const [nickname, setNickname] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      // 간단한 유효성 검사
      if (!email || !password || !phonenum || !nickname) {
        console.error('모든 필드를 입력해주세요.');
        return;
      }

        // axios를 사용한 POST 요청
        const response = await axios.post('http://localhost:3000/app/users', {
          email,
          password,
          phonenum,
          nickname,
        });
  
        if (response.status === 201) {
          // 회원가입 성공 시 로그인 페이지로 이동
          navigate('/login');
        } else {
          // 회원가입 실패 시 에러 메시지 출력
          console.error('Error during sign-up:', response.data || 'No error message available');
        }
      } catch (error) {
        // 서버 요청 중 에러 처리
        console.error('Error during sign-up:', error.response?.data || error.message || error);
      }
    };
  
    return (
      <C.Container>
        <C.WhiteBox>
          <L.ContentContainer>
            <L.BackButton as={Link} to="/">
              ⬅ BACK TO MENU
            </L.BackButton>
            <L.LogoContainer>
              <L.LogoImage src={LogoImage} alt="로고" />
            </L.LogoContainer>
            <L.Title>SignIn</L.Title>
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
              <L.LoginRow>
                <L.LoginContent>PHONE NUMBER</L.LoginContent>
                <L.InputBox
                  type="text"
                  value={phonenum}
                  onChange={(e) => setPhonenum(e.target.value)}
                />
              </L.LoginRow>
              <L.LoginRow>
                <L.LoginContent>NICKNAME</L.LoginContent>
                <L.InputBox
                  type="text"
                  value={nickname}
                  onChange={(e) => setNickname(e.target.value)}
                />
              </L.LoginRow>
              <L.LoginButton onClick={handleSignUp}>SignIn</L.LoginButton>
            </L.IvoryBox>
            <L.SigninButton as={Link} to="/login">
              로그인
            </L.SigninButton>
          </L.ContentContainer>
        </C.WhiteBox>
      </C.Container>
    );
  };
  
  export default Signin;