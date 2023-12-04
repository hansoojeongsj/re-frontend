import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faShoppingCart, faUserPen, faComment, faSignOutAlt,faRectangleList } from '@fortawesome/free-solid-svg-icons';

import * as C from './../Main/ContainerStyle';
import LogoImage from './../Login/logo.png';
import * as M from './MyPageStyle';
import { useAuth } from './../Login/AuthContext';

import Tooltip from './../common/Tooltip';

import CartModal from '../common/Modal/CartModal'; // Modal 컴포넌트 import
import EditProfileContent from './EditProfileContent'; // 새로운 파일을 import
import ReviewManagementContent from './ReviewManagementContent'; // 새로운 파일을 import
import OrderManagement from './OrderManagement';

export default function MyPage() {
  const [isEditing, setIsEditing] = useState(true);
  const [isReviewManaging, setIsReviewManaging] = useState(false);
  const [isOrdering, setIsOrdering] = useState(false);
  const { isLoggedIn, logout, user } = useAuth();
  const [isModalOpen, setModalOpen] = useState(false);
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
  const isAdmin = user && user.isAdmin;

  const userId = user ? user.id : null;

  const showOrderManagement = isLoggedIn && isAdmin && isOrdering;

  const handleEditButtonClick = () => {
    setIsEditing(true);
    setIsReviewManaging(false);
    setIsOrdering(false);
  };

  const handleReviewManageButtonClick = () => {
    setIsEditing(false);
    setIsReviewManaging(true);
    setIsOrdering(false);

  };
  const handleOrderManagementButtonClick = () => {
    setIsEditing(false);
    setIsReviewManaging(false);
    setIsOrdering(true);

  };
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  const handleLogoutButtonClick = () => {
    logout();
    setTooltipVisible(false); // 로그아웃 버튼을 클릭하면 tooltip을 강제로 닫음
  };

  const handleLogoutButtonMouseEnter = (e) => {
    setTooltipPosition({ top: e.clientY, left: e.clientX });
    setTooltipVisible(true);
  };
  
  const handleLogoutButtonMouseLeave = () => {
    setTooltipVisible(false);
  };

  const handleTooltipMouseLeave = () => {
    setTooltipVisible(false);
  };
  return (
    <C.Container>
      <C.WhiteBox>
        <M.ContentContainer>
            <M.BackButton as={Link} to="/">⬅ BACK TO MENU</M.BackButton>
          <M.NavTagContainer>
          {isLoggedIn ? (
              <M.NavTag
              id="logout-button" // 버튼에 ID 추가
              onClick={handleLogoutButtonClick}
              onMouseEnter={handleLogoutButtonMouseEnter}
              onMouseLeave={handleLogoutButtonMouseLeave}
            >
              <FontAwesomeIcon icon={faSignOutAlt} />
            </M.NavTag>
            
            ) : (
              <M.NavTag as={Link} to="/login">
                <FontAwesomeIcon icon={faSignInAlt} />
              </M.NavTag>
            )}
            
            {/* Tooltip 렌더링 */}
            {tooltipVisible && (
              <Tooltip
                text="로그아웃"
                visible={tooltipVisible}
                position={tooltipPosition}
                onMouseLeave={handleTooltipMouseLeave} // 추가
              >
                {/* 내용 */}
            </Tooltip>
          )}

          <M.NavTag onClick={openModal}>
            <FontAwesomeIcon icon={faShoppingCart} />
          </M.NavTag>
          </M.NavTagContainer>
          <M.LogoContainer>
            <M.LogoImage src={LogoImage} alt="로고" />
          </M.LogoContainer>

          <M.Title>MyPage</M.Title>
          <M.IvoryBox>
            {isLoggedIn ? (
              <>
                <M.ButtonContainer>
                  <M.MypageButton
                    onClick={handleEditButtonClick}
                    selected={isEditing}
                  >
                    <FontAwesomeIcon icon={faUserPen} />
                    <br />
                    정보 수정
                  </M.MypageButton>

                  <M.MypageButton
                    onClick={handleReviewManageButtonClick}
                    selected={isReviewManaging}
                  >
                    <FontAwesomeIcon icon={faComment} />
                    <br />
                    리뷰 관리
                  </M.MypageButton>
                  
              {isAdmin && ( // isAdmin이 true일 때만 버튼을 표시
                <M.MypageButton
                  onClick={handleOrderManagementButtonClick}
                  selected={isOrdering}
                >
                  <FontAwesomeIcon icon={faRectangleList} />
                  <br />
                  주문 관리
                </M.MypageButton>
              )}
            </M.ButtonContainer>

                {isEditing && <EditProfileContent />}
                {isReviewManaging && <ReviewManagementContent userId={userId} />}
                {showOrderManagement && <OrderManagement/>}
              </>
            ) : (
              <M.LoginMessage>
                로그인 후 이용해주세요.
              </M.LoginMessage>
            )}
          </M.IvoryBox>
          {isModalOpen && 
            <CartModal isModalOpen={isModalOpen} closeModal={closeModal} />
          }

        </M.ContentContainer>
      </C.WhiteBox>
    </C.Container>
  );
}

