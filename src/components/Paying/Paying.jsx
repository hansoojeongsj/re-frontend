import {useState} from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faShoppingCart, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

import * as P from '../Paying/PayingStyle';
import LogoImage from './../Login/logo.png';
import * as C from './../Main/ContainerStyle';
import { useAuth } from './../Login/AuthContext';

import Tooltip from './../common/Tooltip';

import Modal from '../common/Modal/CartModal'; // Modal 컴포넌트 import

export default function Paying() {

  const [paymentMethod, setPaymentMethod] = useState('general');

  const handlePaymentChange = (method) => {
    setPaymentMethod(method);
  };
  const { isLoggedIn, logout } = useAuth();

  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });

  const handleLogoutButtonClick = () => {
    logout();
    setTooltipVisible(false); // 로그아웃 버튼을 클릭하면 tooltip을 강제로 닫음
  };

  const handleLogoutButtonMouseEnter = (e) => {
    setTooltipPosition({ top: e.clientY, left: e.clientX });
    setTooltipVisible(true);
  };
  
  const handleLogoutButtonMouseLeave = () => {
    setTooltipVisible(false);
  };

  const handleTooltipMouseLeave = () => {
    setTooltipVisible(false);
  };
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <C.Container>
      <C.WhiteBox>
        <P.ContentContainer>
            <P.BackButton as={Link} to="/">⬅ BACK TO MENU</P.BackButton>
          <P.NavTagContainer>
          {isLoggedIn ? (
              <P.NavTag
              id="logout-button" // 버튼에 ID 추가
              onClick={handleLogoutButtonClick}
              onMouseEnter={handleLogoutButtonMouseEnter}
              onMouseLeave={handleLogoutButtonMouseLeave}
            >
              <FontAwesomeIcon icon={faSignOutAlt} />
            </P.NavTag>
            
            ) : (
              <P.NavTag as={Link} to="/login">
                <FontAwesomeIcon icon={faSignInAlt} />
              </P.NavTag>
            )}
            
            {/* Tooltip 렌더링 */}
            {tooltipVisible && (
              <Tooltip
                text="로그아웃"
                visible={tooltipVisible}
                position={tooltipPosition}
                onMouseLeave={handleTooltipMouseLeave} // 추가
              >
                {/* 내용 */}
            </Tooltip>
          )}
            <P.NavTag onClick={openModal}>
              <FontAwesomeIcon icon={faShoppingCart} />
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
                  
                  <P.RadioWrapper>
                    <label>
                      <input
                        type="radio"
                        value="general"
                        checked={paymentMethod === 'general'}
                        onChange={() => handlePaymentChange('general')}
                      />
                      <span>일반결제</span>
                    </label>
                  </P.RadioWrapper>
                  <P.RadioWrapper>
                    <label>
                      <input
                        type="radio"
                        value="kakaoPay"
                        checked={paymentMethod === 'kakaoPay'}
                        onChange={() => handlePaymentChange('kakaoPay')}
                      />
                      <span>카카오페이</span>
                    </label>
                  </P.RadioWrapper>
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

          {isModalOpen && 
            <Modal isModalOpen={isModalOpen} closeModal={closeModal} />
          }
      </P.ContentContainer>
    </C.WhiteBox>
    </C.Container>
);
}
