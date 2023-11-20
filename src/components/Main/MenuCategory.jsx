import React, { useState, useEffect } from 'react';
import { categories } from './data';
import { useNavigate } from 'react-router-dom'; 
import { MenuCategoryContainer, MenuBox, StyledButton, CategoryButtonsWrapper} from './MenuCategoryStyle';

const MenuCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const navigate = useNavigate(); 
  const [buttonFontSize, setButtonFontSize] = useState('20px');
  // const [menuBoxWidth, setMenuBoxWidth] = useState('200px');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleMenuClick = (item) => {
    navigate(`/detail/${item.post_id}`); 
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
    <MenuCategoryContainer>
      <CategoryButtonsWrapper>
        <div>
          {categories.map((category) => (
            <StyledButton
              key={category.title}
              onClick={() => handleCategoryClick(category)}
              selected={selectedCategory === category}
              buttonFontSize={buttonFontSize}
            >
              {category.title}
            </StyledButton>
          ))}
        </div>
      </CategoryButtonsWrapper>
    
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'left' }}>
        {selectedCategory.menu.map((item) => (
          <MenuBox
            key={item.name}
            onClick={() => handleMenuClick(item)}
            
          >
          
            <div className="menu-info">
              <img src={item.image} alt={item.name} />
              <div className="menu-name" >
                <strong>{item.name}</strong>
              </div>
              <div className="menu-price">{item.price}</div>
            </div>
            
          </MenuBox>
        ))}
      </div>
    </MenuCategoryContainer>
  );
};

export default MenuCategory;
