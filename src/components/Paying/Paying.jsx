import {useState} from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import * as P from '../Paying/PayingStyle';
import LogoImage from './../Login/logo.png';
import * as C from './../Main/ContainerStyle';

export default function Paying() {

  const [paymentMethod, setPaymentMethod] = useState('general');

  const handlePaymentChange = (method) => {
    setPaymentMethod(method);
  };
  return (
    <C.Container>
      <C.WhiteBox>
        <P.ContentContainer>
          <a href="/">
            <P.BackButton>⬅ BACK TO MENU</P.BackButton>
          </a>
          <P.NavTagContainer>
            <P.NavTag as={Link} to="/login">
              <FontAwesomeIcon icon={faSignInAlt} /> {/* LOGIN 아이콘 */}
            </P.NavTag>
            <P.NavTag as={Link} to="/">
              <FontAwesomeIcon icon={faShoppingCart} /> {/* CART 아이콘 */}
            </P.NavTag>
          </P.NavTagContainer>
          <P.LogoContainer>
            <P.LogoImage
              src={LogoImage}
              alt="로고"
            />
          </P.LogoContainer>

          <P.Title>Paying</P.Title>
          <P.IvoryBox>
          <P.PayingContainer>
            <P.PayingContent>
              여긴 장바구니 담은거

            </P.PayingContent>
            <P.BottomContainer>
              <P.LeftContainer>
                <P.PayingContent>
                  전화번호 : 010-0000-7455
                </P.PayingContent>
                <P.PayingContent>
                  결제수단
                  <div>
                    <label>
                      <input
                        type="radio"
                        value="general"
                        checked={paymentMethod === 'general'}
                        onChange={() => handlePaymentChange('general')}
                      />
                      일반결제
                    </label>
                  </div>
                  <div>
                    <label>
                      <input
                        type="radio"
                        value="kakaoPay"
                        checked={paymentMethod === 'kakaoPay'}
                        onChange={() => handlePaymentChange('kakaoPay')}
                      />
                      카카오페이
                    </label>
                  </div>
                </P.PayingContent>
              </P.LeftContainer>
              <P.RightContainer>
                <P.PayingContent>
                  결제 상세
                </P.PayingContent>
              </P.RightContainer>
            </P.BottomContainer>
          </P.PayingContainer>
          <P.PayingButton>결제하기</P.PayingButton>

          </P.IvoryBox>


      </P.ContentContainer>
    </C.WhiteBox>
    </C.Container>
);
}
