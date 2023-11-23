import React, { useState } from 'react';
import * as D from './DetailStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faImage } from '@fortawesome/free-solid-svg-icons';
import { FaStar } from 'react-icons/fa';
import PropTypes from 'prop-types';

const ReviewForm = ({ onReviewSubmit }) => {
    const [reviewText, setReviewText] = useState('');

    const [username, setUsername] = useState('');
    const [rating, setRating] = useState(0);
    const [content, setContent] = useState('');
    const [imgSrc, setImgSrc] = useState(null);

    const handleStarClick = (selectedRating) => {
        setRating(selectedRating);
    };

    const handleImageChange = (e) => {
        // 이미지가 선택되었을 때
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setImgSrc(reader.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        } else {
            setImgSrc(null);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // 유효성 검사 등을 수행하고 이후에 리뷰를 전송
        if (username && rating > 0 && content) {
        const newReview = {
            username,
            rating,
            content,
            image: imgSrc,
        };

        onReviewSubmit(newReview);

        // 입력 필드 초기화
        setUsername('');
        setRating(0);
        setContent('');
        setImgSrc(null);
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
                    
                    <D.ReviewButton>
                        <label htmlFor="imageInput">
                            <FontAwesomeIcon icon={faImage} size="2x" />
                        </label>
                        <input
                            id="imageInput"
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            style={{ display: 'none' }} 
                        />

                        <button type="submit">
                            <FontAwesomeIcon icon={faPaperPlane} />
                        </button> 
                    </D.ReviewButton>
                    
                </form>

                
            </D.ReviewInputBox>
        </D.ReviewFormContainer>
    );
};

ReviewForm.propTypes = {
    onReviewSubmit: PropTypes.func.isRequired,
};

export default ReviewForm;