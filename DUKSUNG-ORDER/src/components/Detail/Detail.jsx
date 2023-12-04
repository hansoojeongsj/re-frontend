import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import * as D from './DetailStyle';
import LogoImage from '/logo.png';
import * as C from './../Main/ContainerStyle';
import { Link } from 'react-router-dom';
import CartModal from '../common/Modal/CartModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FaStar } from 'react-icons/fa';
import ReviewForm from './ReviewForm';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '../Login/AuthContext';


const RatingBar = ({ reviews }) => {
    const [frequency, setFrequency] = useState([0, 0, 0, 0, 0]);

    useEffect(() => {
        // 리뷰 데이터에서 별점 빈도수 계산
        const newFrequency = [0, 0, 0, 0, 0];
        reviews.forEach((review) => {
            newFrequency[review.star - 1]++;
        });
        setFrequency(newFrequency);
    }, [reviews]);

    // 별점 바 그리기
    const ratingBars = frequency.map((count, index) => (
        <span key={index + 1}>
        <div className="bar-label">{index + 1}점</div>
        <div className="bar-container">
            <div
            className="yellow-bar"
            style={{ width: `${(count / reviews.length) * 100}%` }}
            ></div>
        </div>
        </span>
    ));

    return (
        <div className="rating-bar-container">
            {ratingBars}
        </div>
    );
};


export default function DetailPage() {
    const { post_id } = useParams();
    const [reviews, setReviews] = useState([]);
    const [ratings, setRatings] = useState([]);
    const [menuData, setMenuData] = useState(null);

    
    const [activeModal, setActiveModal] = useState(null);

    const openModal = (modalType) => {
        setActiveModal(modalType);
    };

    const closeModal = () => {
        setActiveModal(null);
    };

    useEffect(() => {
        const fetchMenuData = async () => {
            try {
                const response = await fetch(`http://localhost:3000/app/getfood/${post_id}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setMenuData(data);
    
                // 리뷰를 불러오는 부분 추가
                if (!reviews.length) {
                    const reviewsResponse = await fetch(`http://localhost:3000/app/comments/${post_id}`);
                    if (!reviewsResponse.ok) {
                        throw new Error(`HTTP error! Status: ${reviewsResponse.status}`);
                    }
                    const reviewsData = await reviewsResponse.json();
        
                    // 리뷰 데이터가 배열인지 확인 후 설정
                    if (Array.isArray(reviewsData.result)) {
                        setReviews(reviewsData.result);
                    } else {
                        console.error('리뷰 데이터가 배열이 아닙니다:', reviewsData);
                    }
                }
                
            } catch (error) {
                console.error('Error fetching menu details:', error);
            }
        };
    
        fetchMenuData();
    }, [post_id, reviews]);

    const calculateAverageRating = () => { // 평점평균
        //console.log('Reviews:', reviews);
        // console.log("calculateAverageRating", reviews);
        if (!reviews || reviews.length === 0) {
            return 0;
        }

        const validReviews = reviews.filter((review) => !isNaN(review.star));
        const totalRating = validReviews.reduce((sum, review) => sum + review.star, 0);
        const averageRating = totalRating / validReviews.length;

        console.log('Total Rating:', totalRating);
        console.log('Average Rating:', averageRating);

    
        return isNaN(averageRating) ? 0 : averageRating;;
    };

    useEffect(() => {
        const newRatings = calculateAverageRating(reviews);
        setRatings(newRatings);
    }, [reviews]); 

    

    const { isLoggedIn, userId } = useAuth();
    const authToken = localStorage.getItem('authToken');

    const handleReviewSubmit = async (newReview) => {
        if (!isLoggedIn) {
            // 사용자가 로그인되지 않은 경우, 메시지 표시하거나 로그인 페이지로 리디렉션할 수 있습니다.
            toast.error(`로그인 후 이용해 주세요`, {
                autoClose: 3000,
                position: toast.POSITION.TOP_CENTER,
            });
        } else {
            try {
                await handleReviewSubmit(newReview);
                console.log('userId: ',userId);
                const response = await fetch(`http://localhost:3000/app/comments/${post_id}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'x-access-token': authToken, 
                    },
                    body: JSON.stringify({
                        content: newReview.content,
                        star: newReview.rating,
                        image: newReview.image || null,
                    }),
                });
        
                if (!response.ok) {
                    throw new Error(`HTTP 오류! 상태: ${response.status}`);
                }
        
                const createdReview = await response.json();
                const updatedReviews = [...reviews, createdReview];
                
                setReviews(updatedReviews);

                console.log('Updated Reviews:', updatedReviews);

                // setReviews 호출 후에 setRatings 호출
                const newRatings = calculateAverageRating(updatedReviews);
                setRatings(newRatings);

                return Promise.resolve();

            } catch (error) {
                console.error('백엔드에 리뷰 제출 중 오류 발생:', error);
                return Promise.reject(error);
            }
        }
    };

    return (
        <C.Container>
            <C.WhiteBox>
                <D.ContentContainer>
                    <D.TopContainer>
                        <D.BackButton as={Link} to="/">⬅ BACK TO MENU</D.BackButton>
                        <D.NavTagContainer>
                            <D.NavTag onClick={() => openModal('cart')}>
                                <FontAwesomeIcon icon={faShoppingCart} />
                            </D.NavTag>
                            {activeModal === 'cart' && (
                                <CartModal isModalOpen={activeModal === 'cart'} closeModal={closeModal} />
                            )}

                        </D.NavTagContainer>
                        
                    </D.TopContainer>
                    <D.LogoContainer>
                            <D.LogoImage src={LogoImage} alt="로고" />
                        </D.LogoContainer>

                    <D.MenuContainer>
                        <D.MenuName>{menuData ? menuData.getFood[0].title : 'Not Found'}</D.MenuName>
                        {menuData && <D.MenuImage src={menuData.getFood[0].image} alt={menuData.name} />}
                        <D.MenuPrice>{menuData ? `${menuData.getFood[0].price}원` : 'Not Found'}</D.MenuPrice>
                        <D.MenuDescription>①난류(가금류),②우유,③메밀,④땅콩,⑤대두,⑥밀,⑦고등어,⑧게,⑨새우,⑩돼지고기,⑪복숭아, ⑫토마토 등과 이들 식품의 성분을 함유한 식품 또는 식품 첨가물</D.MenuDescription>
                    </D.MenuContainer>

                    <D.ReviewContainer>
                        <D.ReviewTitle>REVIEW</D.ReviewTitle>
                        <D.ReviewLineTop><hr /></D.ReviewLineTop>
                            <D.ReviewAvgContainer>
                                <D.ReviewAvg>
                                    <div className='AvgText'>{calculateAverageRating().toFixed(1)}</div>
                                    <div className='star-container-avg'>
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <FaStar
                                                key={star}
                                                size="20"
                                                color={star <= calculateAverageRating() ? '#FFAC33' : '#DDDDDD'}
                                            />
                                        ))}
                                    </div>
                                </D.ReviewAvg>
                                <D.ReviewRatingBar>
                                    <RatingBar reviews={reviews} />
                                </D.ReviewRatingBar>

                            </D.ReviewAvgContainer>
                        <D.ReviewLineBottom><hr /></D.ReviewLineBottom>
                        <D.ReviewList>
                            {Array.isArray(reviews) && reviews.length > 0 ? (
                                reviews.map((review) => (
                                    <div key={review.id}>
                                        <p className="username">{review.nickname}</p>
                                        <p className="date">{review.date}</p>
                                        <div className='star-container'>
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <FaStar
                                                    key={star}
                                                    size="20"
                                                    color={star <= review.star ? '#FFAC33' : '#DDDDDD'}
                                                />
                                            ))}
                                        </div>
                                        <p className="content">{review.content}</p>
                                        {/* 이미지가 있을 때만 출력 */}
                                        {console.log('Image Data:', review.image)}
                                        {review.image !== null && (
                                            <img
                                                key={new Date().getTime()}
                                                src={review.image}
                                                alt="Review"
                                            />
                                        )}
                                    </div>
                                ))
                            ) : (
                                <p style={{fontSize:'16px', marginBottom: '20px'}}>작성된 리뷰가 없습니다.</p>
                            )}
                        </D.ReviewList>
                        {/* 폼으로 리뷰 작성 */}
                        <ReviewForm onReviewSubmit={handleReviewSubmit} postId={post_id} isLoggedIn={isLoggedIn}/>
                    </D.ReviewContainer>

                </D.ContentContainer>
            </C.WhiteBox>
        </C.Container>
    );

}

