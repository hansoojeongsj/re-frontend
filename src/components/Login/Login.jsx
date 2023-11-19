import * as L from './LoginStyle';
import LogoImage from './logo.png';
import * as C from './../Main/ContainerStyle';

export default function Login() {

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

          
            <L.LoginButton>
              LogIn
            </L.LoginButton>
        </L.IvoryBox>
        <a href="/signin">
          <L.SigninButton>
            회원가입
          </L.SigninButton>
        </a>

      </L.ContentContainer>
      </C.WhiteBox>
    </C.Container>
  );
}
