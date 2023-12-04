import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import * as M from './CartModalStyle';
import { useAuth } from '../../Login/AuthContext';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const Modal = ({ isModalOpen, closeModal }) => {
  const { isLoggedIn } = useAuth();
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cartTotalPrice, setCartTotalPrice] = useState(0);
  const [deletingItemId, setDeletingItemId] = useState(null);
  const [cartIsCleared, setCartIsCleared] = useState(0);

  const authToken = localStorage.getItem('authToken');
  console.log('cartItems',cartItems);
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
      
      const result = await response.json();
      if (result && result.result && result.result[0] && result.result[0].getCount[0]) {
        const isCleared = result.result[0].getCount[0].is_cleared;
        setCartIsCleared(isCleared);
        console.log('isCleared:', isCleared);
        setCartTotalPrice(0);
        setCartItems(0); // setCartIsCleared 이후에 호출
      }

      const receivedCartItems = result || [];
      setCartItems(receivedCartItems);

    } catch (error) {
      console.error('Error fetching cart list:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteMenuItem = async (id) => {
    console.log('Deleting item with id:', id);
    setDeletingItemId(id);
    try {
      const response = await fetch(`http://localhost:3000/app/deletecart/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': authToken,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const updatedCartItems = cartItems.result.filter((item) => item.getCount[0].id !== id);
      
      await setCartItems((prevCartItems) => ({
        ...prevCartItems,
        result: updatedCartItems,
      }));

      // Set deletingItemId to null to indicate that the delete operation is complete
      setDeletingItemId(null);

      // Toast message for successful deletion
      toast.success('메뉴가 성공적으로 삭제되었습니다.', {
        autoClose: 3000,
        position: toast.POSITION.TOP_CENTER,
      });

        await fetchCartList();
        handleCalculateTotalPrice();
    } catch (error) {
      console.error('메뉴 삭제 중 에러 발생:', error);

      // Set deletingItemId to null to indicate that the delete operation encountered an error
      setDeletingItemId(null);

      // Toast message for deletion failure
      toast.error('메뉴 삭제에 실패했습니다.', {
        autoClose: 3000,
        position: toast.POSITION.TOP_CENTER,
      });
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

  const handleModalWrapperClick = (e) => {
    if (e.target.classList.contains('modal-wrapper')) {
      closeModal();
    }
  };


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

  return (

    isModalOpen && (
      <M.ModalWrapper className="modal-wrapper" onClick={(e) => handleModalWrapperClick(e)}>
        <M.ModalContent>
          <M.ModalCloseButton onClick={closeModal}>
            <FontAwesomeIcon icon={faTimes} />
          </M.ModalCloseButton>
          <FontAwesomeIcon icon={faShoppingCart} />
          <M.ModalTitle>장바구니</M.ModalTitle>
          {isLoggedIn ? (
            <>
              {loading ? (
                <p>Loading...</p>
              ) : (
                <>
                {cartItemsCount > 0 && cartIsCleared === 0 ? (
                  <M.CartListContainer>
                    {cartItems.result.map((item) => (
                      <M.CartList key={item.getCount[0].id}>
                        <M.ListDeleteButton
                          onClick={() => handleDeleteMenuItem(item.getCount[0].id)}
                          disabled={deletingItemId === item.getCount.id} // Disable button while deleting
                        >
                          <FontAwesomeIcon icon={faTimes} />
                        </M.ListDeleteButton>
                        <M.CartItemImage src={item.getFoodName.image} alt={item.name} />
                        <M.CartItemContent>
                          <M.CartItemName>{item.getFoodName.title}</M.CartItemName>
                          <M.CartItemPrice>{item.getFoodName.price}원</M.CartItemPrice>
                        </M.CartItemContent>
                      </M.CartList>
                    ))}
                  </M.CartListContainer>
                ) : (
                  <p style={{ fontSize: '19px', fontWeight: 'normal' }}>
                    {cartIsCleared === 1 ? (
                      <>
                        장바구니가 비어 있습니다.<br />
                        장바구니는 하나의 메뉴만 담을 수 있습니다.
                      </>
                    ) : (
                      <>
                        장바구니가 비어 있습니다.<br />
                        장바구니는 하나의 메뉴만 담을 수 있습니다.
                      </>
                    )}
                  </p>
                )}
                {cartItemsCount > 0 && cartIsCleared === 1 ? (
                <>
                <M.ModalContainer>
                  <M.CartTotal>
                    <M.TotalInfo>
                      <M.TotalTitle>총 수량</M.TotalTitle>
                      <M.TotalNum>0개</M.TotalNum>
                    </M.TotalInfo>
                    <M.TotalInfo>
                      <M.TotalTitle>총 가격</M.TotalTitle>
                      <M.TotalNum>0원</M.TotalNum>
                    </M.TotalInfo>
                  </M.CartTotal>
                  </M.ModalContainer>
                <M.PayingButton >
                  주문하기
                </M.PayingButton>
                  </>
                    ) : (<>
                                    <M.ModalContainer>
                  <M.CartTotal>
                    <M.TotalInfo>
                      <M.TotalTitle>총 수량</M.TotalTitle>
                      <M.TotalNum>{cartItemsCount}개</M.TotalNum>
                    </M.TotalInfo>
                    <M.TotalInfo>
                      <M.TotalTitle>총 가격</M.TotalTitle>
                      <M.TotalNum>{cartTotalPrice}원</M.TotalNum>
                    </M.TotalInfo>
                  </M.CartTotal>
                  </M.ModalContainer>
                  <M.PayingButton as={Link} to="/paying" onClick={closeModal}>
                  주문하기
                </M.PayingButton>
                    </>)}
                
              </>
            )}
          </>
        ) : (
          <>
            <M.LoginMessage>로그인 후 이용해주세요.</M.LoginMessage>
            <M.LoginButton as={Link} to="/login">
              Login
            </M.LoginButton>
          </>
        )}
      </M.ModalContent>
    </M.ModalWrapper>
    )

  );
};

Modal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};
export default Modal;
