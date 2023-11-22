import {useState} from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faShoppingCart, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

import * as P from '../Paying/PayingStyle';
import LogoImage from './../Login/logo.png';
import * as C from './../Main/ContainerStyle';
import { useAuth } from './../Login/AuthContext';

import Tooltip from './../common/Tooltip';

import CartModal from '../common/Modal/CartModal'; // Modal 컴포넌트 import
import PayingModal from './PayingModal';

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
    setTooltipVisible(false);
  };

  const handleLogoutButtonMouseEnter = (e) => {
    setTooltipPosition({ top: e.clientY, left: e.clientX });
    setTooltipVisible(true);
  };

  const handleLogoutButtonMouseLeave = () => {
    setTooltipVisible(false);
  };

  const [activeModal, setActiveModal] = useState(null);

  const openModal = (modalType) => {
    setActiveModal(modalType);
  };

  const closeModal = () => {
    setActiveModal(null);
  };
  const [editablePhoneNumber, setEditablePhoneNumber] = useState('010-0000-7455');
  const [isEditingPhoneNumber, setIsEditingPhoneNumber] = useState(false);

  const handleEditPhoneNumber = () => {
    setIsEditingPhoneNumber(true);
  };

  const handleSavePhoneNumber = () => {
    // 여기에서 입력값을 어떻게 처리할지 정의하십시오.
    // 이 예시에서는 그냥 상태를 업데이트하지만, 실제로는 서버로 전송하거나 다른 작업이 필요할 수 있습니다.
    setIsEditingPhoneNumber(false);
  };

  const handlePhoneNumberChange = (e) => {
    // 숫자와 -만 입력 허용 (정규표현식 사용)
    const value = e.target.value.replace(/[^0-9-]/g, '').slice(0, 15);
    setEditablePhoneNumber(value);
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
              >
                {/* 내용 */}
            </Tooltip>
          )}
            <P.NavTag onClick={() => openModal('cart')}>
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
            <P.TopContent>
              <P.PayingContent>
                여긴 장바구니 담은거

              </P.PayingContent>
            </P.TopContent>

            <P.BottomContainer>
            <P.LeftContainer>

              <P.PayingContent>
                <P.NumberTitle>전화번호 &nbsp;&nbsp;&nbsp;{' '}</P.NumberTitle>
              {isEditingPhoneNumber ? (
                    <>
                      <P.NumberInput
                        type="text"
                        value={editablePhoneNumber}
                        onChange={handlePhoneNumberChange}
                      />
                      
                      <P.NumberButton onClick={handleSavePhoneNumber}>저장</P.NumberButton>
                    </>
                  ) : (
                    <>
                      <P.NumberFont>{editablePhoneNumber}</P.NumberFont>
                      <P.NumberButton onClick={handleEditPhoneNumber}>수정</P.NumberButton>
                    </>
                  )}
              </P.PayingContent>
                <P.PayingContent>
                  <P.NumberTitle>결제수단</P.NumberTitle>
                  
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
                    <P.NumberTitle>
                      결제 상세
                    </P.NumberTitle>

                  </P.PayingContent>
                </P.RightContainer>
            </P.BottomContainer>
          </P.PayingContainer>
          <P.PayingButton onClick={() => openModal('paying')}>결제하기</P.PayingButton>
          {activeModal === 'paying' && (
            <PayingModal isModalOpen={activeModal === 'paying'} closeModal={closeModal} />
          )}
          {activeModal === 'cart' && (
            <CartModal isModalOpen={activeModal === 'cart'} closeModal={closeModal} />
          )}
        </P.IvoryBox>

      </P.ContentContainer>
    </C.WhiteBox>
  </C.Container>
  );
}
