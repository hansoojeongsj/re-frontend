import PropTypes from 'prop-types'; // PropTypes 추가
import * as D from './DetailModalStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import { useEffect } from 'react';



const DetailModal = ({ isModalOpen, closeModal, menu }) => {
    const navigate = useNavigate();

    const handleMenuClick = () => {
        closeModal();
        navigate(`/detail/${menu.post_id}`);
    }


    return (
        <>
        {isModalOpen && (
            <D.ModalOverlay>
                <D.ModalContent>
                    <D.CloseButton onClick={closeModal}>
                        <FontAwesomeIcon icon={faTimes} />
                    </D.CloseButton>

                    <D.ModalTitle>{menu.id}</D.ModalTitle>
                        <D.ModalTitle>{menu.name}</D.ModalTitle>
                        <D.PayingMenu>
                        <D.DivWrapper>
                            <D.MKTitle>{menu.price}</D.MKTitle>
                            <D.PayingListTitle>{menu.description}</D.PayingListTitle>
                        </D.DivWrapper>
                        <D.PayingCount>1개</D.PayingCount>
                        </D.PayingMenu>

                        <D.PayingTotal>
                        <D.PayingMenu>
                            <D.BottomTitle>총 수량 </D.BottomTitle>
                            <D.BottomNum> 2개</D.BottomNum>
                        </D.PayingMenu>
                        </D.PayingTotal>

                        <D.OkButton as={Link} to="/">
                            장바구니 담기
                        </D.OkButton>
                        <D.showReviewText onClick={handleMenuClick}>
                            SHOW REVIEW
                        </D.showReviewText>
                </D.ModalContent>
            </D.ModalOverlay>
        )}
        </>
    );
};

// PropTypes 추가
DetailModal.propTypes = {
    isModalOpen: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
    menu: PropTypes.object,
};

export default DetailModal;