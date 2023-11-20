import * as L from './LoginStyle';
import LogoImage from './logo.png';
import * as C from './../Main/ContainerStyle';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext'; // AuthContext의 useAuth 훅 import

export default function Login() {
  const { login } = useAuth(); // isLoggedIn 변수를 사용하지 않으므로 제거

  const handleLogin = () => {
    // 로그인 버튼을 클릭했을 때 실행되는 함수
    login(); // 로그인 상태를 갱신
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
              <L.InputBox></L.InputBox>
            </L.LoginRow>
            <L.LoginRow>
              <L.LoginContent>PASSWORD</L.LoginContent>
              <L.InputBox></L.InputBox>
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
