import PropTypes from 'prop-types'; // PropTypes 추가
import * as P from './PayingModalStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import {useState,  useEffect} from 'react';


const PayingModal = ({ isModalOpen, closeModal, orderDetails }) => {
  const [orderNumber, setOrderNumber] = useState(null);  // 추가
  const authToken = localStorage.getItem('authToken');

  useEffect(() => {
    // 주문번호를 받아오는 API 호출
    console.log('orderDetails:', orderDetails);
    console.log('authToken:', authToken);
  
    const fetchOrderNumber = async (id) => {
      try {
        const response = await fetch(`http://localhost:3000/app/returnNum/${id}`, {
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
        console.log('API 응답:', result);
        // 주문번호가 있는지 확인
        if (result[0] && result[0][0] && result[0][0]['MAX(id)'] !== null) {
          setOrderNumber(result[0][0]['MAX(id)']);
        } else {
          console.error('주문번호를 찾을 수 없거나 잘못된 형식입니다.');
        }
      } catch (error) {
        console.error('Error fetching order number:', error);
      }
    };
    fetchOrderNumber();
  }, [orderNumber]);
  return (
    <>
      {isModalOpen && (
        <P.ModalOverlay>
          <P.ModalContent>
            <P.CloseButton onClick={closeModal}>
              <FontAwesomeIcon icon={faTimes} />
            </P.CloseButton>
            <P.ModalTitle>주문완료</P.ModalTitle>
            <P.ModalTitle>{orderNumber}</P.ModalTitle> 

            <P.PayingList>
              {orderDetails.map((item) => (
                <P.PayingMenu key={item.foodId}>
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
                <P.BottomNum>{orderDetails.reduce((acc, cur) => acc + cur.price * cur.quantity, 0)}원</P.BottomNum>
              </P.PayingMenu>
            </P.PayingTotal>

            <P.OkButton as={Link} to="/">
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