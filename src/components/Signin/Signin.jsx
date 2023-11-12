import * as L from './SigninStyle';
import LogoImage from './../Login/logo.png';
import * as C from './../Main/ContainerStyle';

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
          <L.SubConainer>
          <L.InputContainer>

            <L.SigninContent>EMAIL</L.SigninContent>
            <L.InputBox></L.InputBox>
          </L.InputContainer>

          <L.InputContainer>
            <L.SigninContent>PASSWORD</L.SigninContent>
            <L.InputBox></L.InputBox>
          </L.InputContainer>

          <L.InputContainer>
            <L.SigninContent>PHONE NUMBER</L.SigninContent>
            <L.InputBox></L.InputBox>
          </L.InputContainer>

          <L.InputContainer>
            <L.SigninContent>NINKNAME</L.SigninContent>
            <L.InputBox></L.InputBox>
          </L.InputContainer>
          <L.SigninButton>
              SignIn
            </L.SigninButton>
            </L.SubConainer>
        </L.IvoryBox>
        <a href="/login">
          <L.LoginButton>
            로그인
          </L.LoginButton>
        </a>

      </L.ContentContainer>
      </C.WhiteBox>
    </C.Container>
  );
}
