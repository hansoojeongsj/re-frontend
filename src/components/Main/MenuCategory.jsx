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








// import styled from 'styled-components';
// import babybamsik from './../../menu-image/babybamsik.jpg';
// import bamsikimage from './../../menu-image/bamsik-image.jpg';
// import hwasaimage from './../../menu-image/hwasa-image.jpg';

// const GalleryContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center; /* 가운데 정렬을 위해 추가 */
//   margin: 0 auto;
//   text-align: center;
// `;

// const TitleWrapper = styled.div`
//   display: flex;
//   width: 100%;
// `;

// const MenuTitle = styled.a`
//   margin-left: 25px;
//   padding: 5px;
//   font-size: 30px;
//   font-weight: bold;
// `;

// const ImageContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   width: 100%;
//   padding: 10px;

// `;

// const Image = styled.img`
//   width: 90%;
//   height: auto;
//   padding: 5px;

// `;

// const MenuCategory = () => {
//   return (
//     <GalleryContainer>
//       <TitleWrapper>
//         <MenuTitle>학생식당</MenuTitle>
//       </TitleWrapper>
//       <ImageContainer>
//         <div>
//           <Image src={babybamsik} alt="메뉴 1" />
//           <h1>파스타</h1>
//         </div>
//         <div>
//           <Image src={bamsikimage} alt="메뉴 2" />
//           <h1>햄버거</h1>
//         </div>
//         <div>
//           <Image src={hwasaimage} alt="메뉴 3" />
//           <h1>마라탕</h1>
//         </div>
//       </ImageContainer>
//     </GalleryContainer>
//   );
// };

// export default MenuCategory;
