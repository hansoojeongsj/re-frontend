import React, { useState } from 'react';
import * as D from './DetailStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faImage } from '@fortawesome/free-solid-svg-icons';
import { FaStar } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { useAuth } from '../Login/AuthContext';

const ReviewForm = ({ onReviewSubmit, postId }) => {
    const [rating, setRating] = useState(0);
    const [content, setContent] = useState('');
    const [imgFile, setImgFile] = useState(null);
    const { isLoggedIn } = useAuth();
    const authToken = localStorage.getItem('authToken');

    const handleStarClick = (selectedRating) => {
        setRating(selectedRating);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            setImgFile(file);
            console.log('Image selected:', file);
        } else {
            setImgFile(null);
        }
    };

    const generateUniqueId = () => {
        return Math.random().toString(36).substring(2) + Date.now().toString(36);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // 유효성 검사 등을 수행하고 이후에 리뷰를 전송
        if (rating > 0 && content) {
            const newReview = {
                id: generateUniqueId(),
                rating,
                content,
            };

            const formData = new FormData();
            formData.append('image', e.target[1].files[0]); 

            // 이미지 업로드를 위한 Fetch 요청
            const response = await fetch(`http://localhost:3000/app/comments/${postId}`, {
                method: 'POST',
                body: formData,
                headers: {
                    'x-access-token': authToken,
                },
            });

            if (response.ok) {
                // 서버 응답이 성공인 경우 리뷰 전송
                onReviewSubmit(newReview);

                // 입력 필드 초기화
                setRating(0);
                setContent('');
                setImgFile(null);
            } else {
                console.error('Image upload failed.');
            }
        }
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
                            style={{ cursor: 'pointer' }}
                        />
                    ))}
                </div>
                {isLoggedIn ? (
                    <form onSubmit={handleSubmit}>
                        <D.ReviewTextContainer>
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
                                name="image"
                                onChange={handleImageChange}
                                style={{ display: 'none' }}
                            />

                            <button type="submit">
                                <FontAwesomeIcon icon={faPaperPlane} />
                            </button>
                        </D.ReviewButton>
                    </form>
                ) : (
                    <p style={{ color: 'gray' }}>로그인 후 이용하세요</p>
                )}  
            </D.ReviewInputBox>
        </D.ReviewFormContainer>
    );
};

ReviewForm.propTypes = {
    onReviewSubmit: PropTypes.func.isRequired,
    isLoggedIn: PropTypes.bool,
};

export default ReviewForm;
