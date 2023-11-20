import PropTypes from 'prop-types'; // Import prop-types
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import * as M from './ModalStyle';
import { useAuth } from './../../Login/AuthContext';


const Modal = ({ isModalOpen, closeModal }) => {
  const { isLoggedIn } = useAuth();

  const handleModalWrapperClick = (e) => {
    if (e.target.classList.contains('modal-wrapper')) {
      closeModal();
    }
  };

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
            <M.CartList>
            </M.CartList>
            <M.CartList>

            </M.CartList>
            <M.CartList>

            </M.CartList>
            <M.CartList>

            </M.CartList>
            <M.CartList>
              
            </M.CartList>
          </M.CartListContainer>
          <M.ModalContainer>
            <M.CartTotal>

            </M.CartTotal>
          </M.ModalContainer>
          <M.PayingButton as={Link} to="/paying">주문하기</M.PayingButton>
          </>
          ) : (
            <>
            <M.LoginMessage>
              로그인 후 이용해주세요.
            </M.LoginMessage>
            <M.LoginButton as={Link} to="/login">Login</M.LoginButton>
            </>
          )}
        </M.ModalContent>
      </M.ModalWrapper>
    )
  );
};

// Add prop-types validation
Modal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default Modal;