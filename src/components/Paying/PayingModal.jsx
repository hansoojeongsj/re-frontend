import PropTypes from 'prop-types'; // PropTypes 추가
import * as P from './PayingModalStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const PayingModal = ({ isModalOpen, closeModal }) => {

  return (
    <>
      {isModalOpen && (
        <P.ModalOverlay>
          <P.ModalContent>
            <P.CloseButton onClick={closeModal}>
              <FontAwesomeIcon icon={faTimes} />
            </P.CloseButton>
              <P.ModalTitle>주문완료</P.ModalTitle>

              <P.ModalTitle>103</P.ModalTitle>
              <P.PayingList>
                <P.PayingListTitle></P.PayingListTitle>
                <P.PayingCount></P.PayingCount>
                <P.PayingPrice></P.PayingPrice>

                <P.PayingTotal></P.PayingTotal>
                <P.PayingTotal></P.PayingTotal>

              </P.PayingList>
            <P.OkButton as={Link} to="/">
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