import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSignInAlt, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import * as N from './NavStyle';
import LogoImage from '/logo.png';
const Nav = () => {


  return (
    <N.NavWrapper>
      <N.NavContent>
        <a href="/">
          <N.LogoImage src={LogoImage} alt="로고 이미지" />
        </a>
        <N.NavInput type="text" placeholder="검색어를 입력해주세요." />
        <N.NavTag href="/mypage">
          <FontAwesomeIcon icon={faUser} /> {/* MYPAGE 아이콘 */}
        </N.NavTag>
        <N.NavTag href="/login">
          <FontAwesomeIcon icon={faSignInAlt} /> {/* LOGIN 아이콘 */}
        </N.NavTag>
        <N.NavTag>
          <FontAwesomeIcon icon={faShoppingCart} /> {/* CART 아이콘 */}
        </N.NavTag>
      </N.NavContent>
    </N.NavWrapper>
  );
};

export default Nav;
