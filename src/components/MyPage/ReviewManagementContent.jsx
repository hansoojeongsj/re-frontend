import  { useState } from 'react';
import * as M from './MyPageStyle'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar} from '@fortawesome/free-solid-svg-icons';

import ReviewImg from '/public/babybamsik.jpg'
const ReviewManagementContent = () => {
  const yellowStars = Math.floor(Math.random() * 5) + 1; // 1부터 5까지의 랜덤한 수

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const totalEntries = 44;
  const totalPages = Math.ceil(totalEntries / itemsPerPage);

  const getCurrentPageEntries = () => {
    
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const reversedEntries = [...entries].reverse();
    return reversedEntries.slice(startIndex, endIndex);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const entries = Array.from({ length: totalEntries }).map((_, index) => ({
    id: index + 1,
    // 나머지 항목 정보
    
  }));

  return (
    <M.ReviewContainer>
    {getCurrentPageEntries().map((entry) => (
      <M.ReviewList key={entry.id}>
        <M.ReviewImage src={ReviewImg} alt={entry.id}/>
        <M.ReviewListContainer>

          <M.ReviewId>{entry.id} 한수정</M.ReviewId>
          <M.SubContent>
            {[...Array(5)].map((_, index) => (
              <FontAwesomeIcon icon={faStar}
                key={index}
                color={index < yellowStars ? '#FFAC33' : '#DDDDDD'}
              />
            ))}
            {new Date().toLocaleDateString()}
          </M.SubContent>
          <M.ReviewContent>
            너무 맛있어요.            너무 맛있어요.
            너무 맛있어요.
            너무 맛있어요.

            </M.ReviewContent>
          </M.ReviewListContainer>
      </M.ReviewList>
    ))}
      
      {/* 페이지네이션 컴포넌트 추가 */}
      <M.Pagination>
        <ul>
          {Array.from({ length: totalPages }).map((_, index) => (
            <li
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={currentPage === index + 1 ? 'active' : ''}>
              {index + 1}
            </li>
          ))}
        </ul>
      </M.Pagination>
    </M.ReviewContainer>
  );
};

export default ReviewManagementContent;
