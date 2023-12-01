import React, { useState, useEffect } from 'react';
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
        const imgFile = e.target.files[0];

        if (imgFile) {
            setImgFile(imgFile);
            console.log('Image selected:', imgFile);
        } else {
            setImgFile(null);
        }
    };

    const generateUniqueId = () => {
        return Math.random().toString(36).substring(2) + Date.now().toString(36);
    };

    const handleSubmit = async (e) => {
        //e.preventDefault();
        console.log('전송 버튼 클릭됨');
        
    
        // 유효성 검사 등을 수행하고 이후에 리뷰를 전송
        if (!e.currentTarget.hasAttribute('data-submitting')) {
            // 양식이 중복으로 제출되지 않도록 양식을 제출 중인 상태로 표시
            e.currentTarget.setAttribute('data-submitting', 'true');
    
            if (rating > 0 && content) {
                const newReview = {
                    id: generateUniqueId(),
                    rating,
                    content,
                    image: imgFile,
                };
    
                const formData = new FormData();
                formData.append('content', newReview.content);
                formData.append('star', newReview.rating);
                if (newReview.image) {
                    formData.append('image', newReview.image);
                }
    
                // 이미지 업로드를 위한 Fetch 요청
                try {
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
                } catch (error) {
                    console.error('Error during fetch:', error);
                }
    
                // 양식이 중복으로 제출되지 않도록 양식을 제출 중인 상태 제거
                e.currentTarget?.removeAttribute('data-submitting');
            }
        }
    };

    useEffect(() => {
        console.log('Rating:', rating);
    }, [rating]);
    
    useEffect(() => {
        console.log('Content:', content);
    }, [content]);
    
    useEffect(() => {
        console.log('ImgFile:', imgFile);
    }, [imgFile]);

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
    postId: PropTypes.string.isRequired,
};

export default ReviewForm;
