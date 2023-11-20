import * as L from '../Login/LoginStyle';
import LogoImage from './../Login/logo.png';
import * as C from './../Main/ContainerStyle';
import { Link } from 'react-router-dom';


export default function Signin() {

  return (
    <C.Container>
      <C.WhiteBox>
      <L.ContentContainer>
      <a href="/">
        <L.BackButton>⬅ BACK TO MENU</L.BackButton>
      </a>
        <L.LogoContainer>
        <L.LogoImage
          src={LogoImage}
          alt="로고"
        />
        </L.LogoContainer>
        <L.Title>SignIn</L.Title>
        <L.IvoryBox>
          <L.LoginRow>

            <L.LoginContent>EMAIL</L.LoginContent>
            <L.InputBox></L.InputBox>
          </L.LoginRow>
          <L.LoginRow>

            <L.LoginContent>PASSWORD</L.LoginContent>
            <L.InputBox></L.InputBox>
          </L.LoginRow>
          <L.LoginRow>

            <L.LoginContent>PHONE NUMBER</L.LoginContent>
            <L.InputBox></L.InputBox>
          </L.LoginRow>
          <L.LoginRow>

            <L.LoginContent>NINKNAME</L.LoginContent>
            <L.InputBox></L.InputBox>
          </L.LoginRow>

          <L.LoginButton as={Link} to ="/login">
              SignIn
            </L.LoginButton>
            
        </L.IvoryBox>
          <L.SigninButton as={Link} to ="/login">
            로그인
          </L.SigninButton>

      </L.ContentContainer>
      </C.WhiteBox>
    </C.Container>
  );
}
