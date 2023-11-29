import React, { useState, useEffect } from 'react';
// import { categories } from './data';
import * as M from './MenuCategoryStyle';
import DetailModal from './DetailModal';

const MenuCategory = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState({
    id: null,
    name: "",
    food: [],
  });
  //const [activeModal, setActiveModal] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(null);

  useEffect(() => {
    // 카테고리 데이터 가져오기
    fetch('http://localhost:3000/app/getcategoryList/')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setCategories(data);
        setSelectedCategory(data[0]); // 기본적으로 첫 번째 카테고리 선택
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  useEffect(() => {
    // 카테고리 별로 가져오기 
    const fetchCategoryFood = async () => {
      try {
        if (selectedCategory && selectedCategory.id !== null) {
          //console.log('Fetching food for category:', selectedCategory);
          const response = await fetch(`http://localhost:3000/app/getcategoryfood/${selectedCategory.id}`);
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
    
          const data = await response.json();
          //console.log('Fetched Food for Category:', data);
          
          if (Array.isArray(data)) {
            setSelectedCategory(prevCategory => ({
              ...prevCategory,
              food: data,
            }));
          } else if (data && typeof data === 'object') {
            // data가 객체인 경우 배열로 만들어서 setSelectedCategory 업데이트
            setSelectedCategory(prevCategory => ({
              ...prevCategory,
              food: [data], // 객체를 배열로 감싸서 업데이트
            }));
          } else {
            console.error('Invalid data format for food:', data);
          }
        }
      } catch (error) {
        console.error('Error fetching category food:', error);
      }
    };
  
    fetchCategoryFood();
  }, [selectedCategory]);


  //console.log(categories);

  const openModal = (menu) => {
    setSelectedMenu(menu); // 클릭한 메뉴 정보를 상태에 저장
    //setActiveModal(menu.post_id);
    setIsModalOpen(true); // 모달을 열 때 isModalOpen 상태를 true로 변경
  };

  const closeModal = () => {
    setSelectedMenu(null);
    //setActiveModal(null);
    setIsModalOpen(false); 
  };


  const handleCategoryClick = (category) => {
    //console.log('Selected Category:', category);
    setSelectedCategory(category);
  };

  const handleMenuClick = (item) => {
    //console.log('handleMenuClick:', item);
    if(item && item.id){
      openModal(item);
    }
    
  };

  if (!Array.isArray(categories)) {
    console.error('Invalid categories data:', categories);
    return <div>Error loading categories</div>;
  }

  //console.log("selectedCategory.food:", selectedCategory.food);

  return (
    <M.MenuCategoryContainer>
      <M.CategoryButtonsWrapper>
        <div>
        {categories && categories.length > 0 && categories.map((item) => (
            <M.StyledButton
              key={item.id}
              onClick={() => handleCategoryClick(item)}
              selected={selectedCategory && selectedCategory.id === item.id}
            >
              {item.title}
            </M.StyledButton>
          ))}
        </div>
      </M.CategoryButtonsWrapper>
    
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'left' }}>
          {selectedCategory && selectedCategory.food && selectedCategory.food.map((itemArray, outerIndex) => (
            <React.Fragment key={`outer-${outerIndex}`}>
                {Array.isArray(itemArray) ? (
                itemArray
                  .filter((item) => typeof item === 'object' && item.id && item.title && item.price)
                  .map((item, innerIndex) => (
                    <M.MenuBox
                      key={`inner-${outerIndex}-${innerIndex}`}
                      onClick={() => handleMenuClick(item)}
                    >
                      <div className="menu-info">
                      <img src={item.image} alt={item.title} /> 
                        <div className="menu-name">
                          <strong>{item.title}</strong>
                        </div>
                        <div className="menu-price">{item.price}원</div>
                      </div>
                    </M.MenuBox>
                  ))
              ) : (
                // Handle the case where itemArray is not an array (you can adjust this part)
                <div key={`non-array-${outerIndex}`}>
                  Non-array data: {JSON.stringify(itemArray)}
                </div>
              )}
            </React.Fragment>
          ))}
          {selectedMenu && (
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
