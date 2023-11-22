import PropTypes from 'prop-types'; // PropTypes 추가
import * as P from './PayingModalStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
const PayingModal = ({ isModalOpen, closeModal }) => {

  return (
    <>
      {isModalOpen && (
        <P.ModalOverlay>
          <P.ModalContent>
            <P.CloseButton onClick={closeModal}>
              <FontAwesomeIcon icon={faTimes} />
            </P.CloseButton>
            <p>주문완료</p>

            <p>103</p>
            <P.OkButton>
              확인
            </P.OkButton>
          </P.ModalContent>
        </P.ModalOverlay>
      )}
    </>
  );
};

// PropTypes 추가
PayingModal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default PayingModal;