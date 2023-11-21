import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSignInAlt, faShoppingCart, faSearch ,faSignOutAlt} from '@fortawesome/free-solid-svg-icons';
import * as N from './NavStyle';
import LogoImage from '/logo.png';
import TodayMenuImage from '/today-menu.jpg';
import { useAuth } from './../Login/AuthContext';
import Modal from './../common/Modal/CartModal';
import Tooltip from './../common/Tooltip';

const Nav = () => {
  const { isLoggedIn, logout } = useAuth();
  const [isModalOpen, setModalOpen] = useState(false);
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });

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
    <N.NavWrapper>
      <N.NavContent>
        <a href="/">
          <N.LogoImage src={LogoImage} alt="로고 이미지" />
        </a>
        <N.SearchWrapper>
          <N.GrayBox>
            <span className="search-icon">
              <FontAwesomeIcon icon={faSearch} />
            </span>
            <N.NavInput type="text" placeholder="검색어를 입력해주세요." />
          </N.GrayBox>
        </N.SearchWrapper>
        
        <N.NavTagContainer>
          <N.NavTag as={Link} to="/mypage">
            <FontAwesomeIcon icon={faUser} />
          </N.NavTag>
          {isLoggedIn ? (
              <N.NavTag
              id="logout-button" // 버튼에 ID 추가
              onClick={handleLogoutButtonClick}
              onMouseEnter={handleLogoutButtonMouseEnter}
              onMouseLeave={handleLogoutButtonMouseLeave}
            >
              <FontAwesomeIcon icon={faSignOutAlt} />
            </N.NavTag>
            
            ) : (
              <N.NavTag as={Link} to="/login">
                <FontAwesomeIcon icon={faSignInAlt} />
              </N.NavTag>
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
          <N.NavTag onClick={openModal}>
            <FontAwesomeIcon icon={faShoppingCart} />
          </N.NavTag>
        </N.NavTagContainer>
      </N.NavContent>
      <N.TodayMenuImage src={TodayMenuImage} alt="Today's Menu" />
      {isModalOpen && (
      <Modal isModalOpen={isModalOpen} closeModal={closeModal} />
      )}
    </N.NavWrapper>
  );
};

export default Nav;
