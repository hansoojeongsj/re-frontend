import React, { useState } from 'react';
import * as D from './DetailStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FaStar } from 'react-icons/fa';

const ReviewForm = ({ onReviewSubmit }) => {
    const [reviewText, setReviewText] = useState('');

    const [username, setUsername] = useState('');
    const [rating, setRating] = useState(0);
    const [content, setContent] = useState('');

    const handleStarClick = (selectedRating) => {
        setRating(selectedRating);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // 유효성 검사 등을 수행하고 이후에 리뷰를 전송
        if (username && rating > 0 && content) {
        const newReview = {
            username,
            rating,
            content,
        };
        onReviewSubmit(newReview);

        // 입력 필드 초기화
        setUsername('');
        setRating(0);
        setContent('');
        }
    };

    const handleSendReview = () => {
        // 리뷰를 전송하는 로직 작성
        console.log('Sending review:', reviewText);
        // 전송 후 필요한 작업 수행
        setReviewText(''); // 리뷰 전송 후 입력창 초기화
    };

    return (
        <D.ReviewFormContainer>

            <D.ReviewInputBox>
                <div>
                    {[1, 2, 3, 4, 5].map((star) => (
                        <FaStar
                            key={star}
                            size="20"
                            onClick={() => handleStarClick(star)}
                            color={star <= rating ? '#FFAC33' : '#DDDDDD'}
                            style={{ cursor: 'pointer'}}
                        />
                    ))}
                </div>

                <input
                    type="text"
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                    placeholder="Write a review..."
                />

                <button>
                    <FontAwesomeIcon icon={faPaperPlane} />
                </button>  
            </D.ReviewInputBox>


        </D.ReviewFormContainer>
    );
};

export default ReviewForm;