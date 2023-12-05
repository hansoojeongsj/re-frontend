import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSignInAlt, faShoppingCart, faSearch, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import * as N from './NavStyle';
import LogoImage from '/logo.png';
import { useAuth } from './../Login/AuthContext';
import CartModal from './../common/Modal/CartModal';
import Tooltip from './../common/Tooltip';
import CarouselComponent from './Carousel';
import DetailModal from './DetailModal';

const Nav = () => {
  const { isLoggedIn, logout } = useAuth();
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [isCartModalOpen, setCartModalOpen] = useState(false);
  const [isDetailModalOpen, setDetailModalOpen] = useState(false);

const openCartModal = () => {
  setCartModalOpen(true);
};

const closeCartModal = () => {
  setCartModalOpen(false);
};

const openDetailModal = (menu) => {
  setSelectedMenu(menu);
  setDetailModalOpen(true);
};

const closeDetailModal = () => {
  setSelectedMenu(null);
  setDetailModalOpen(false);
};

  const handleLogoutButtonClick = () => {
    logout();
    setTooltipVisible(false);
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

  const handleSearchInputChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
  };
  const handleSearchButtonClick = async () => {
    try {
      const response = await fetch(`http://localhost:3000/app/post/search?word=${searchTerm}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setSearchResults(data);

    } catch (error) {
      console.error('Error searching for menu:', error);
    }
  };

  const handleSearchKeyDown = (e) => {
    // Enter 키를 눌렀을 때 검색 수행
    if (e.key === 'Enter') {
      handleSearchButtonClick();
    }
  };

  const handleMenuClick = (item) => {
    console.log(item)

    if(item){
      openDetailModal(item);
    }
  };

  return (
    <N.NavWrapper>
      <N.NavContent>
        <a href="/">
          <N.LogoImage src={LogoImage} alt="로고 이미지" />
        </a>
        <N.SearchWrapper>
          <N.GrayBox>
            <button className="search-icon" onClick={handleSearchButtonClick}>
              <FontAwesomeIcon icon={faSearch}  style={{ color: '#FFAC33', fontSize: '22px' }}/>
            </button>
            <N.NavInput
              type="text"
              placeholder="검색어를 입력해주세요."
              value={searchTerm}
              onChange={handleSearchInputChange}
              onKeyDown={handleSearchKeyDown} // Enter 키 이벤트 추가

            />
          </N.GrayBox>
        </N.SearchWrapper>
        <N.NavTagContainer>
          <N.NavTag as={Link} to="/mypage">
            <FontAwesomeIcon icon={faUser} />
          </N.NavTag>
          {isLoggedIn ? (
            <N.NavTag
              id="logout-button"
              onClick={handleLogoutButtonClick}
              onMouseEnter={handleLogoutButtonMouseEnter}
              onMouseLeave={handleLogoutButtonMouseLeave}
              onKeyDown={handleSearchKeyDown} // Enter 키 이벤트 추가

            >
              <FontAwesomeIcon icon={faSignOutAlt} />
            </N.NavTag>
          ) : (
            <N.NavTag as={Link} to="/login">
              <FontAwesomeIcon icon={faSignInAlt} />
            </N.NavTag>
          )}
          {tooltipVisible && (
            <Tooltip
              text="로그아웃"
              visible={tooltipVisible}
              position={tooltipPosition}
              onMouseLeave={handleTooltipMouseLeave}
            >
              {/* 내용 */}
            </Tooltip>
          )}
          <N.NavTag onClick={openCartModal}>
            <FontAwesomeIcon icon={faShoppingCart} />
          </N.NavTag>
        </N.NavTagContainer>
      </N.NavContent>
      <div>
        {/* searchResults가 존재할 때에만 결과를 표시 */}
        {searchResults && searchResults.result && searchResults.result.length > 0 && (
          <div className="search-results-container">
            {searchResults.result.map((result, index) => (
              <div key={`search-result-${index}`} onClick={() => handleMenuClick(result)}>
                {result.title}
              </div>
            ))}
          </div>
          
        )}
        
      </div>
      <CarouselComponent />
      {selectedMenu && (
    <DetailModal
      isModalOpen={isDetailModalOpen}
      closeModal={closeDetailModal}
      menu={selectedMenu}
    />
    
  )}
  {isCartModalOpen && (
    <CartModal
      isModalOpen={isCartModalOpen}
      closeModal={closeCartModal}
    />
  )}
      </N.NavWrapper>
  );
};

export default Nav;