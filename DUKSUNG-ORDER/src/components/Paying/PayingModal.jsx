import PropTypes from 'prop-types'; // PropTypes 추가
import * as P from './PayingModalStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import {useState,  useEffect} from 'react';
import { useNavigate  } from 'react-router-dom';
import cartItems from '../common/Modal/CartModal';
import setCartItems from '../common/Modal/CartModal';

const PayingModal = ({ isModalOpen, closeModal, orderDetails }) => {
  const [orderNumber, setOrderNumber] = useState(null);
  const authToken = localStorage.getItem('authToken');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrderNumber = async (cartId) => {
      try {
        const response = await fetch(`http://localhost:3000/app/returnNum/${cartId}`, {
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

        if (result.length === 2 && result[0].length === 1 && result[1].length === 1) {
          const maxId1 = result[0][0]['MAX(id)'];
          const maxId2 = result[1][0]['MAX(id)'];
          const orderNumber = maxId1 !== null ? maxId1 : maxId2;

          if (orderNumber !== null) {
            setOrderNumber(orderNumber);
          } else {
            console.error('주문번호를 찾을 수 없거나 잘못된 형식입니다.');
          }
        } else {
          console.error('API 응답 형식이 예상과 다릅니다.');
        }
      } catch (error) {
        console.error('Error fetching order number:', error);
      }
    };
    // 주문 상세 정보에서 첫 번째 주문의 cartId를 가져옴
    const cartId = orderDetails.length > 0 ? orderDetails[0].cartId : null;

    // cartId가 존재할 때만 fetchOrderNumber 함수 호출
    if (cartId) {
      fetchOrderNumber(cartId);
    }
  }, [orderDetails, authToken]);

  const handleModalClose = async () => {
    try {
      // 주문 상세 정보에서 첫 번째 주문의 cartId를 가져옴
      const id = orderDetails.length > 0 ? orderDetails[0].cartId : null;
  
      // cartId가 존재할 때만 삭제 요청을 보냄
      if (id) {
        // 장바구니 비우기 요청 보내기
        const response = await fetch(`http://localhost:3000/app/clearCart/${id}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-access-token': authToken,
          },
        });
  
        // 장바구니가 성공적으로 비워졌는지 확인
        if (response.ok) {
          console.log('response.statusText',response.statusText);
          // 서버에서 응답이 성공이면 모달을 닫고 페이지 이동
          closeModal();
          navigate('/');
        } else {
          // 서버 응답이 실패이면 적절한 에러 처리
          console.error('장바구니 비우기 실패:', response.statusText);
          // 여기에 적절한 에러 처리를 추가할 수 있습니다.
        }
      } else {
        console.log('cartId is null or undefined');
      }
    } catch (error) {
      console.error('Error clearing cart:', error);
      // 여기에 적절한 에러 처리를 추가할 수 있습니다.
    }
  };
  

  return (
    <>
      {isModalOpen && (
        <P.ModalOverlay>
          <P.ModalContent>
            <P.CloseButton onClick={handleModalClose}>
              <FontAwesomeIcon icon={faTimes} />
            </P.CloseButton>
            <P.ModalTitle>주문완료</P.ModalTitle>
            <P.ModalTitle>{orderNumber}</P.ModalTitle> 

            <P.PayingList>
              {orderDetails.map((item) => (
                <P.PayingMenu key={item.cartId}>
                  <P.DivWrapper>
                    <P.MKTitle>파스타</P.MKTitle>
                    <P.PayingListTitle>{item.foodName}</P.PayingListTitle>
                  </P.DivWrapper>
                  <P.PayingCount>{item.quantity}개</P.PayingCount>
                  <P.PayingPrice>{item.price}원</P.PayingPrice>
                </P.PayingMenu>
              ))}
            </P.PayingList>

            <P.PayingTotal>
              <P.PayingMenu>
                <P.BottomTitle>총 수량 </P.BottomTitle>
                <P.BottomNum>{orderDetails.reduce((acc, cur) => acc + cur.quantity, 0)}개</P.BottomNum>
              </P.PayingMenu>

              <P.PayingMenu>
                <P.BottomTitle>주문금액</P.BottomTitle>
                <P.BottomNum>{orderDetails.reduce((acc, cur) => cur.price, 0)}원</P.BottomNum>
              </P.PayingMenu>
            </P.PayingTotal>

            <P.OkButton onClick={handleModalClose}>
              확인
            </P.OkButton>
          </P.ModalContent>
        </P.ModalOverlay>
      )}
    </>
  );
};

// PropTypes에 orderDetails 추가
PayingModal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  orderDetails: PropTypes.array.isRequired, // 주문 정보 배열
};

export default PayingModal;