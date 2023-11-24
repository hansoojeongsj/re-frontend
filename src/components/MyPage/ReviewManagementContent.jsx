
import  { useState } from 'react';
import * as M from './MyPageStyle'; // MyPageStyle 파일에 정의된 스타일을 가져옵니다.

const ReviewManagementContent = () => {
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
          {/* 각 항목에 대한 표시 */}
          {entry.id}
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
