import React, { useState } from 'react';
import * as D from './DetailStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FaStar } from 'react-icons/fa';
import PropTypes from 'prop-types';

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

    // 전송버튼 이벤트 
    const handleSendReview = () => {
        // 리뷰를 전송하는 로직 작성
        console.log('Sending review:', reviewText);

        onReviewSubmit({ username, rating, content });

        // 입력창 초기화
        setUsername('');
        setRating(0);
        setContent('');
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
                <form onSubmit={handleSubmit}>
                    <D.ReviewTextContainer>
                        <D.ReviewNameInput
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Your Name"
                        />
                        <D.ReviewContentInput
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            placeholder="Write a review..."
                        />
                    </D.ReviewTextContainer>
                    
                    <button type="submit">
                        <FontAwesomeIcon icon={faPaperPlane} />
                    </button> 
                </form>

                
            </D.ReviewInputBox>
        </D.ReviewFormContainer>
    );
};

ReviewForm.propTypes = {
    onReviewSubmit: PropTypes.func.isRequired,
};

export default ReviewForm;