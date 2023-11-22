import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import * as M from './CartModalStyle';
import { useAuth } from '../../Login/AuthContext';
import { useState } from 'react';

// 임의의 이미지 파일 경로
const getRandomImage = () => {
  const images = [
    '/school.jpg',
    '/bamsik-image.jpg',
    '/hwasa-image.jpg',
    '/babybamsik.jpg',
    // ... 다른 이미지들
  ];
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
};

const Modal = ({ isModalOpen, closeModal }) => {
  const { isLoggedIn } = useAuth();
  const [cartItems, setCartItems] = useState([
    { name: 'Item 1', price: 1000 },
    { name: 'Item 2', price: 2000 },
    { name: 'Item 3', price: 1500 },
    { name: 'Item 4', price: 3000 },
    { name: 'Item 5', price: 2500 },
    { name: 'Item 6', price: 1800 },
    { name: 'Item 7', price: 1200 },
  ]);

  const handleModalWrapperClick = (e) => {
    if (e.target.classList.contains('modal-wrapper')) {
      closeModal();
    }
  };

  const handleDeleteCartItem = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };
  const cartItemsCount = cartItems.length;

  const cartTotalPrice = cartItems.reduce((total, item) => total + item.price, 0);

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
              <M.CartListContainer>
                {cartItems.map((item, index) => (
                  <M.CartList key={index}>
                    <M.ListDeleteButton onClick={() => handleDeleteCartItem(index)}>
                      <FontAwesomeIcon icon={faTimes} />
                    </M.ListDeleteButton>
                    <M.CartItemImage src={getRandomImage()} alt={`Item ${index + 1}`} />
                    <M.CartItemContent>
                      <M.CartItemName>{item.name}</M.CartItemName>
                      <M.CartItemPrice>{item.price}원</M.CartItemPrice>
                    </M.CartItemContent>
                  </M.CartList>
                ))}
              </M.CartListContainer>
              <M.ModalContainer>
                <M.CartTotal>{/* 카트 총 가격 등의 정보 */}
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
