import React, { useState, useEffect } from 'react';
import { categories } from './data';
import { useNavigate } from 'react-router-dom'; 
import * as M from './MenuCategoryStyle';
import DetailModal from './DetailModal';

const MenuCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  //const navigate = useNavigate(); 
  const [buttonFontSize, setButtonFontSize] = useState('20px');
  // const [menuBoxWidth, setMenuBoxWidth] = useState('200px');

  const [activeModal, setActiveModal] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(null);

  const openModal = (menu) => {
    setSelectedMenu(menu); // 클릭한 메뉴 정보를 상태에 저장
    setActiveModal(menu.post_id);
    setIsModalOpen(true); // 모달을 열 때 isModalOpen 상태를 true로 변경
  };

  const closeModal = () => {
    setActiveModal(null);
    setIsModalOpen(false); // 모달을 닫을 때 isModalOpen 상태를 false로 변경
  };


  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleMenuClick = (item) => {
    //navigate(`/detail/${item.post_id}`); 
    openModal(item);
  };

  useEffect(() => {
    const handleResize = () => {
      // 화면 폭에 따라 버튼의 글꼴 크기를 동적으로 조정
      if (window.innerWidth <= 900) {
        setButtonFontSize('16px');
      } else {
        setButtonFontSize('20px');
      }
    };

    // 화면 크기 변경 이벤트에 핸들러 등록
    window.addEventListener('resize', handleResize);

    // 컴포넌트가 마운트 해제될 때 이벤트 리스너 제거
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <M.MenuCategoryContainer>
      <M.CategoryButtonsWrapper>
        <div>
          {categories.map((category) => (
            <M.StyledButton
              key={category.title}
              onClick={() => handleCategoryClick(category)}
              selected={selectedCategory === category}
              data-button-font-size={buttonFontSize}
            >
              {category.title}
            </M.StyledButton>
          ))}
        </div>
      </M.CategoryButtonsWrapper>
    
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'left' }}>
        {selectedCategory.menu.map((item) => (
          <M.MenuBox
            key={item.name}
            // onClick={() => handleMenuClick(item)}
            onClick={() => handleMenuClick(item)}
          >
          
            <div className="menu-info">
              <img src={item.image} alt={item.name} />
              <div className="menu-name" >
                <strong>{item.name}</strong>
              </div>
              <div className="menu-price">{item.price}</div>
            </div>
            {activeModal && (
              <DetailModal isModalOpen={isModalOpen} closeModal={closeModal} menu={selectedMenu} />
            )}
            
          </M.MenuBox>
        ))}
      </div>
    </M.MenuCategoryContainer>
  );
};

export default MenuCategory;
