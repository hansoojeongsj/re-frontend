import React, { useState } from 'react';
import { categories } from './data';
import { useNavigate } from 'react-router-dom'; 
import { MenuCategoryContainer, MenuBox } from './MenuCategoryStyle';

const MenuCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const navigate = useNavigate(); 

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleMenuClick = (item) => {
    navigate(`/detail/${item.post_id}`); 
  };

  return (
    <MenuCategoryContainer>
      <div style={{ display: 'flex', justifyContent: 'left', fontWeight: 'bold' }}>
        {categories.map((category) => (
          <button
            key={category.title}
            onClick={() => handleCategoryClick(category)}
            style={{
              padding: '10px',
              margin: '5px',
              background: selectedCategory === category ? '#FFEACC' : 'transparent',
              fontWeight: 'bold',
            }}
          >
            {category.title}
          </button>
        ))}
      </div>
    
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'left' }}>
        {selectedCategory.menu.map((item) => (
          <MenuBox
            key={item.name}
            onClick={() => handleMenuClick(item)}
          >
          
            <div className="menu-info">
              <img src={item.image} alt={item.name} />
              <div className="menu-name">
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
