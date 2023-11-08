
import * as N from './NavStyle';

const Nav = () => {


  return (
    <N.NavWrapper>
      <N.NavContent>
        <N.NavTag href="/">MAIN</N.NavTag>
        <input type="text" placeholder="검색" />
        <N.NavTag href="/mypage">MYPAGE</N.NavTag>
        <N.NavTag href="/login">LOGIN</N.NavTag>
        <N.NavTag>CART</N.NavTag>
      </N.NavContent>
    </N.NavWrapper>
  );
};

export default Nav;
