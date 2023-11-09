
import * as N from './NavStyle';
import LogoImage from '/logo.png';
const Nav = () => {


  return (
    <N.NavWrapper>
      <N.NavContent>
        <a href="/">
          <N.LogoImage src={LogoImage} alt="로고 이미지" />
        </a>
        <input type="text" placeholder="검색" />
        <N.NavTag href="/mypage">MYPAGE</N.NavTag>
        <N.NavTag href="/login">LOGIN</N.NavTag>
        <N.NavTag>CART</N.NavTag>
      </N.NavContent>
    </N.NavWrapper>
  );
};

export default Nav;
