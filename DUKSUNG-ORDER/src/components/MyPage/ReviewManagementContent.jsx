import  { useState, useEffect } from 'react';
import * as M from './MyPageStyle'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar} from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { useAuth } from './../Login/AuthContext';

const ReviewManagementContent = ({userId}) => {
  const [reviews, setReviews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const authToken = localStorage.getItem('authToken');
  console.log('AuthToken:', authToken);




  useEffect(() => {
    const fetchUserReviews = async () => {
      try {
        
        // 서버에서 현재 사용자가 작성한 리뷰 데이터 가져오기
        const response = await fetch(`http://localhost:3000/app/mypage/`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'x-access-token': authToken,
          },
        });
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const reviewsData = await response.json();
        console.log('Reviews Data:', reviewsData);

        setReviews(reviewsData.result); // 실제 리뷰 데이터 

      } catch (error) {
        console.error('Error fetching user reviews:', error);
      }
    };

    fetchUserReviews();
  }, [userId, authToken]);


  const getCurrentPageReviews = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const reversedReviews = [...reviews].reverse();
    return reversedReviews.slice(startIndex, endIndex);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };


  return (
    <M.ReviewContainer>
      {reviews.length === 0 ? (
      <M.NoReviewMessage>작성한 리뷰가 없습니다.</M.NoReviewMessage>
    ) : (
        <>
          {getCurrentPageReviews().map((review, index) => (
            <M.ReviewList key={index}>
              <M.ReviewImage src={review.image} alt={review.id}/>
              <M.ReviewListContainer>
                <M.ReviewId>{review.id} {review.nickname}</M.ReviewId>
                <M.SubContent>
                  {[...Array(5)].map((_, index) => (
                        <FontAwesomeIcon icon={faStar}
                          key={index}
                          color={index < review.star? '#FFAC33' : '#DDDDDD'}
                        />
                    ))}
                  <span style={{ marginLeft: '5px' }}>{/* 간격 조절 */}</span>
                  {review.date}
                </M.SubContent>
                <M.ReviewContent>{review.content}</M.ReviewContent>
                </M.ReviewListContainer>
            </M.ReviewList>
          ))}

          {/* 페이지네이션 컴포넌트 추가 */}
          <M.Pagination>
            <ul>
                {Array.from({ length: Math.ceil(reviews.length / itemsPerPage) }).map((_, index) => (
                  <li
                    key={index}
                    onClick={() => handlePageChange(index + 1)}
                    className={currentPage === index + 1 ? 'active' : ''}
                  >
                    {index + 1}
                  </li>
                ))}
            </ul>
          </M.Pagination>
        </>
      )}
    </M.ReviewContainer>
  );
};

ReviewManagementContent.propTypes = {
  isLoggedIn: PropTypes.bool,
  userId: PropTypes.string,
};


export default ReviewManagementContent;
