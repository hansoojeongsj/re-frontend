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
                <P.PayingMenu>
                  <P.DivWrapper>
                  <P.MKTitle>한우사골마라탕
                  <br />

                  </P.MKTitle>
                  <P.PayingListTitle>마라탕</P.PayingListTitle>
                  </P.DivWrapper>
                  <P.PayingCount>1개</P.PayingCount>
                  <P.PayingPrice>6000원</P.PayingPrice>
                </P.PayingMenu>
                <P.PayingMenu>
                <P.DivWrapper>
                  <P.MKTitle>한우사골마라탕
                  <br />

                  </P.MKTitle>
                  <P.PayingListTitle>마라샹궈</P.PayingListTitle>
                  </P.DivWrapper>
                  <P.PayingCount>1개</P.PayingCount>
                  <P.PayingPrice>8000원</P.PayingPrice>
                </P.PayingMenu>
              </P.PayingList>

                <P.PayingTotal>
                  <P.PayingMenu>
                    <P.BottomTitle>총 수량 </P.BottomTitle>
                    <P.BottomNum> 2개</P.BottomNum>
                  </P.PayingMenu>

                  <P.PayingMenu>
                      <P.BottomTitle>주문금액</P.BottomTitle>
                      <P.BottomNum> 14000원</P.BottomNum>
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

// PropTypes 추가
PayingModal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default PayingModal;