import PropTypes from 'prop-types'; // PropTypes 추가
import * as D from './DetailModalStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faCirclePlus, faCircleMinus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '../Login/AuthContext';


const DetailModal = ({ isModalOpen, closeModal, menu}) => {
    const { isLoggedIn } = useAuth(); // AuthContext에서 isLoggedIn을 가져옴
    const navigate = useNavigate();
    const [quantity, setQuantity] = useState(1);

    const handleMenuClick = () => {
        closeModal();
        navigate(`/detail/${menu.post_id}`);
    }

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };
        
    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };
    

    const handleAddToCart = () => {
    if (!isLoggedIn) {
        // 로그인 되지 않은 경우 처리
        // 예시로 토스트 메시지를 띄워 사용자에게 알림
        toast.error("로그인 후 이용해주세요.", {
            autoClose: 3000,
            position: toast.POSITION.TOP_CENTER,
        });
        // 로그인 페이지로 이동 또는 다른 로그인 처리를 수행할 수 있습니다.
        // navigate('/login'); // 예시로 로그인 페이지로 이동하는 코드
    } else {
        // 로그인된 경우 장바구니에 메뉴를 추가하는 로직을 구현하세요.
        console.log(`Added ${quantity} ${menu.title}(s) to the cart`);

        toast.success(`${menu.title} ${quantity}개를 장바구니에 추가했습니다. 장바구니를 확인하세요!`, {
            autoClose: 3000,
            position: toast.POSITION.TOP_CENTER,
        });
        closeModal();
        // navigate('/');
    }
    };
    return (
        <>
        {isModalOpen && (
            <D.ModalOverlay>
                <D.ModalContent>
                    <D.CloseButton onClick={closeModal}>
                        <FontAwesomeIcon icon={faTimes} />
                    </D.CloseButton>

                    {/* <D.MenuTitle>{menu.id}</D.MenuTitle> */}
                        <D.MenuImage src={menu.image} alt={menu.name} />
                        <D.MenuTitle>{menu.title}</D.MenuTitle>
                        <D.InfoMenu>
                            <D.MenuDescription>메뉴설명입니당 ㅎㅎㅎㅎㅎㅎ.알레르기 어쩌구</D.MenuDescription>
                            {/* <D.PayingListTitle>{menu.description}</D.PayingListTitle> */}
                            <D.MenuPrice>{menu.price}</D.MenuPrice>
                        </D.InfoMenu>

                        <D.MenuTotal>
                            <D.MenuCount>
                                <FontAwesomeIcon icon={faCircleMinus} onClick={handleDecrease} />
                                {quantity}
                                <FontAwesomeIcon icon={faCirclePlus} onClick={handleIncrease} />
                            </D.MenuCount>
                        </D.MenuTotal>

                        <D.CartButton onClick={handleAddToCart}>
                            장바구니 담기
                        </D.CartButton>
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