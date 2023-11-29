import {useState,  useEffect} from 'react';
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
  const { isLoggedIn, logout } = useAuth();

  const [cartItems, setCartItems] = useState([]);
  const [cartTotalPrice, setCartTotalPrice] = useState(0);
  const authToken = localStorage.getItem('authToken');

  const [paymentMethod, setPaymentMethod] = useState('general');
  const [orderDetails, setOrderDetails] = useState(null);

  const fetchCartList = async () => {
    try {
      const response = await fetch(`http://localhost:3000/app/cartlist/`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': authToken,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      console.log('response:',response);
      console.log('authToken:',authToken);

      const result = await response.json();
      console.log('result:', result);

      const receivedCartItems = result || [];
      setCartItems(receivedCartItems);

    } catch (error) {
      console.error('Error fetching cart list:', error);
    }
  };
  
  const handleCalculateTotalPrice = async () => {
    try {
      const response = await fetch('http://localhost:3000/app/calcCart', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': authToken,
        },
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const result = await response.json();

      // 로그로 응답 데이터 확인
      console.log('응답 데이터:', result);
  
      // 응답 데이터 구조에 맞게 코드 수정
      const totalPrice = result[0][0]['sum(f.price*c.count)'];

      if (typeof totalPrice === 'number') {
        setCartTotalPrice(totalPrice);
        console.log('총 가격:', totalPrice);
      } else if((totalPrice === null)) {
        setCartTotalPrice(0);
      } else {
        console.error('올바르지 않은 응답 데이터:', result);
      }
    } catch (error) {
      console.error('카트 가격 계산 중 에러 발생:', error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      if (isLoggedIn) {
        await fetchCartList();
        await handleCalculateTotalPrice();
      }
    };

    fetchData();
  }, [isLoggedIn]);

const cartItemsCount = Array.isArray(cartItems.result)
? cartItems.result.reduce((sum, item) => {
    const getCountArray = item.getCount;

    if (Array.isArray(getCountArray) && getCountArray.length > 0) {
      const countItem = getCountArray[0];

      if (countItem && typeof countItem.count === 'number') {
        return sum + countItem.count;
      }
    }

    return sum;
  }, 0)
: 0;

  const handlePaymentChange = (method) => {
    setPaymentMethod(method);
  };

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
    if (modalType === 'paying') {
      // 주문 정보 구성
      const orderDetails = cartItems.result.map((item) => ({
        foodId: item.getCount[0].id,
        foodName: item.getFoodName.title,
        quantity: cartItemsCount,
        price: cartTotalPrice,
      }));
      setActiveModal(modalType);
      setOrderDetails(orderDetails); // 이 부분이 추가되었습니다.
    } else {
      setActiveModal(modalType);
    }
  };

  const closeModal = () => {
    setActiveModal(null);
  };
  const [editablePhoneNumber, setEditablePhoneNumber] = useState('01011119999');
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
          {isLoggedIn ? (

          <P.BottomContainer>

            <P.TopContent>
            {cartItemsCount > 0 ? (

            <P.PayingList>
              {cartItems.result.map((item) => (

                <P.PayingMenu key={item}>
                <P.Inner>
                  <P.PayingImg src={item.getFoodName.image} alt={item.name}/>
                  <P.Inner2>
                    <P.MKTitle>파스타</P.MKTitle>
                    <P.PayingListTitle>{item.getFoodName.title}</P.PayingListTitle>
                  </P.Inner2>
                </P.Inner >
              <P.PayingCount>{cartItemsCount}개</P.PayingCount>
              <P.PayingPrice>{cartTotalPrice}원</P.PayingPrice>
            </P.PayingMenu>
              ))}

              </P.PayingList>
            ) : (
              <p style={{ fontSize: '19px', fontWeight: 'normal' }}>
                담은 메뉴가 없습니다.<br></br>
                </p>
            )}
            </P.TopContent>
            
            </P.BottomContainer>
          ) : (
            <p style={{
              fontSize: '19px',
              fontWeight: 'bold',
              textAlign: 'center',  // 가운데 정렬
              color: '#FFAC33',    // 글씨 색
            }}>
              로그인 후 이용해주세요.
            </p>
          )}
            {isLoggedIn && (
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
                  <P.TotalContent>
                    <P.NumberTitle>
                      결제 상세
                    </P.NumberTitle>
                    <P.TotalInfo>

                    <P.TotalTitle>총 수량</P.TotalTitle>
                      <P.TotalNum>{cartItemsCount}개</P.TotalNum>
                    </P.TotalInfo>

                    <P.TotalInfo>
                      <P.TotalTitle>총 가격</P.TotalTitle>
                      <P.TotalNum>{cartTotalPrice}원</P.TotalNum>
                    </P.TotalInfo>
                  </P.TotalContent>
                </P.RightContainer>
            </P.BottomContainer>
            )}
          </P.PayingContainer>
          {isLoggedIn && (

          <P.PayingButton onClick={() => openModal('paying')}>결제하기</P.PayingButton>
          )}
          {activeModal === 'paying' && (
            <PayingModal isModalOpen={activeModal === 'paying'} closeModal={closeModal} orderDetails={orderDetails} />
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
