import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import * as C from './../Main/ContainerStyle';
import LogoImage from './../Login/logo.png';
import * as M from './MyPageStyle';

export default function Signin() {


  return (
    <C.Container>
      <C.WhiteBox>
        <M.ContentContainer>
          <a href="/">
            <M.BackButton>⬅ BACK TO MENU</M.BackButton>
          </a>
          <M.NavTagContainer>
            <M.NavTag as={Link} to="/login">
              <FontAwesomeIcon icon={faSignInAlt} /> {/* LOGIN 아이콘 */}
            </M.NavTag>
            <M.NavTag as={Link} to="/">
              <FontAwesomeIcon icon={faShoppingCart} /> {/* CART 아이콘 */}
            </M.NavTag>
          </M.NavTagContainer>
          <M.LogoContainer>
            <M.LogoImage
              src={LogoImage}
              alt="로고"
            />
          </M.LogoContainer>

          <M.Title>MyPage</M.Title>
          <M.IvoryBox>
            <M.ModifyButton>
              수정하기
            </M.ModifyButton>
          </M.IvoryBox>


        </M.ContentContainer>
      </C.WhiteBox>
    </C.Container>
  );
}
