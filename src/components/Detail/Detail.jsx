import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { categories } from '../Main/data';
import * as D from './DetailStyle';
import LogoImage from '/logo.png';
import * as C from './../Main/ContainerStyle';
import { Link } from 'react-router-dom';
import CartModal from '../common/Modal/CartModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FaStar } from 'react-icons/fa';
import ReviewForm from './ReviewForm';
import { ReviewData } from './Reviewdata';

const RatingBar = ({ ratings }) => {
    const totalRatings = ratings.reduce((acc, rating) => acc + rating.count, 0);

    return (
        <D.ReviewRatingBar>
            {ratings.map((rating, index) => (
                <span key={index}>
                    <span className="grey-bar"></span>
                    <span className="yellow-bar" style={{ width: `${(rating.count / totalRatings) * 100}%` }}></span>
                </span>
            ))}
        </D.ReviewRatingBar>
    );
};


export default function DetailPage() {
    const { post_id } = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        // 여기서 리뷰 데이터를 불러와서 상태에 설정
        setReviews(ReviewData);
    }, []); 

    const [activeModal, setActiveModal] = useState(null);

    const openModal = (modalType) => {
        setActiveModal(modalType);
    };

    const closeModal = () => {
        setActiveModal(null);
    };

    const ratings = [
        { rating: 1, count: 0 },
        { rating: 2, count: 1 },
        { rating: 3, count: 0 },
        { rating: 4, count: 1 },
        { rating: 5, count: 5 },
    ];


    // categories 배열에서 post_id에 해당하는 메뉴 객체 찾기
    const selectedMenu = categories
        .flatMap(category => category.menu)
        .find(menu => menu.post_id === post_id);

    const menuName = selectedMenu ? selectedMenu.name : "Not Found";
    const menuImage = selectedMenu ? selectedMenu.image : null;
    const menuPrice = selectedMenu ? selectedMenu.price : "Not Found";


    const handleReviewSubmit = (newReview) => {
        setReviews([...reviews, newReview]);
        console.log('Submitting review to the backend:', newReview);  // console 테스트
    };

    const calculateAverageRating = () => { // 평점 평균
        if (reviews.length === 0) {
            return 0;
        }

        const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
        return totalRating / reviews.length;
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
                        <D.MenuName>{menuName}</D.MenuName>
                        {menuImage && <D.MenuImage src={menuImage} alt={menuName} />}
                        <D.MenuPrice>{menuPrice}</D.MenuPrice>
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
                                    <RatingBar ratings={ratings} />
                                </D.ReviewRatingBar>
                    
                            </D.ReviewAvgContainer>
                        <D.ReviewLineBottom><hr /></D.ReviewLineBottom>
                        <D.ReviewList>
                            {reviews.map((review) => (
                                <div key={review.id}>
                                    <p className="username">{review.username}</p>
                                    <p className="date">{review.date}</p>
                                    <div className='star-container'>
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <FaStar
                                                key={star}
                                                size="20"
                                                color={star <= review.rating ? '#FFAC33' : '#DDDDDD'}
                                            />
                                        ))}
                                    </div>
                                    <p className="content">{review.content}</p>
                                    {/* 이미지가 있을 때만 출력 */}
                                    {review.image && <img src={review.image} alt="Review" />}
                                </div>
                            ))}
                        </D.ReviewList>
                        {/* 폼으로 리뷰 작성 */}
                        <ReviewForm onReviewSubmit={handleReviewSubmit} />
                    </D.ReviewContainer>

                </D.ContentContainer>
            </C.WhiteBox>
        </C.Container>
    );

}

