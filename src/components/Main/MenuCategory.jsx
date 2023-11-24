import React, { useState, useEffect } from 'react';
import { categories } from './data';
// import { useNavigate } from 'react-router-dom'; 
import * as M from './MenuCategoryStyle';
import DetailModal from './DetailModal';

const MenuCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  //const navigate = useNavigate(); 

  const [activeModal, setActiveModal] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(null);


  const openModal = (menu) => {
    setSelectedMenu(menu); // 클릭한 메뉴 정보를 상태에 저장
    setActiveModal(menu.post_id);
    setIsModalOpen(true); // 모달을 열 때 isModalOpen 상태를 true로 변경
  };

  const closeModal = () => {
    setSelectedMenu(null);
    setActiveModal(null);
    setIsModalOpen(false); 
  };


  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleMenuClick = (item) => {
    //navigate(`/detail/${item.post_id}`); 
    openModal(item);
  };

  return (
    <M.MenuCategoryContainer>
      <M.CategoryButtonsWrapper>
        <div>
          {categories.map((category) => (
            <M.StyledButton
              key={category.title}
              onClick={() => handleCategoryClick(category)}
              selected={selectedCategory === category}
              //data-button-font-size={buttonFontSize}
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
          </M.MenuBox>
        ))}
        {activeModal && (
          <DetailModal
            isModalOpen={isModalOpen}
            closeModal={closeModal}
            menu={selectedMenu}
          />
        )}
      </div>

    </M.MenuCategoryContainer>
  );
};

export default MenuCategory;
