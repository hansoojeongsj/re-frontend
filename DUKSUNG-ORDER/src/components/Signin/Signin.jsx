import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as L from '../Login/LoginStyle';
import LogoImage from './../Login/logo.png';
import * as C from './../Main/ContainerStyle';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        toast.error('비어있는 영역이 있습니다.', {
          autoClose: 3000,
          position: toast.POSITION.TOP_CENTER,
        });
        console.error('모든 필드를 입력해주세요.');
        return;
      }

        // 이메일이 특정 도메인으로 끝나는지 검사
        if (!email.endsWith('@duksung.ac.kr')) {
          // 경고 메시지 표시
          toast.error('덕성이메일을 입력해주세요.', {
            autoClose: 2000,
            position: toast.POSITION.TOP_CENTER,
          });
          return;
        }

        if(password.length < 6) {
          toast.error('비밀번호는 6자리이상 숫자를 입력해주세요', {
            autoClose: 2000,
            position: toast.POSITION.TOP_CENTER,
          });
          return;
        }

        // 전화번호가 올바른 형식인지 검사 (정규표현식 사용)
        const phoneRegex = /^\d{11}$/; // 10자 또는 11자의 숫자만 허용
        if (!phoneRegex.test(phonenum)) {
          // 경고 메시지 표시
          toast.error('잘못된 전화번호 형식입니다. 숫자만 입력해 주세요.', {
            autoClose: 2000,
            position: toast.POSITION.TOP_CENTER,
          });
          return;
        }

        // axios를 사용한 POST 요청
        const response = await axios.post('http://localhost:3000/app/users', {
          email,
          password,
          phonenum,
          nickname,
        });
  
        if (response.status === 200) {
          toast.success('회원가입이 완료되었습니다. 로그인해주세요.', {
            autoClose: 3000,
            position: toast.POSITION.TOP_CENTER,
          });
          // 회원가입 성공 시 로그인 페이지로 이동
          navigate('/login');
        } else {
          // 회원가입 실패 시 에러 메시지 출력
          toast.error('회원가입 실패', {
            autoClose: 3000,
            position: toast.POSITION.TOP_CENTER,
          });
          console.error('Error during sign-up:', response.data || 'No error message available');
        }
      } catch (error) {
        // 서버 요청 중 에러 처리
        console.error('Error during sign-up:', error.response?.data || error.message || error);

          // 서버에서 반환한 상세한 오류 메시지 출력
          if (error.response) {
            console.error('Server response:', error.response.data);
          }
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
                  name="email"
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
            <ToastContainer />
            <L.SigninButton as={Link} to="/login">
              로그인
            </L.SigninButton>
          </L.ContentContainer>
        </C.WhiteBox>
      </C.Container>
    );
  };
  
  export default Signin;