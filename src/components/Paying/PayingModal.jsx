import PropTypes from 'prop-types'; // PropTypes 추가
import { ModalOverlay, ModalContent, CloseButton } from './PayingModalStyle';

const PayingModal = ({ isModalOpen, closeModal }) => {
  return (
    <>
      {isModalOpen && (
        <ModalOverlay>
          <ModalContent>
            <CloseButton onClick={closeModal}>&times;</CloseButton>
            <p>모달 내용을 여기에 작성하세요.</p>
          </ModalContent>
        </ModalOverlay>
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