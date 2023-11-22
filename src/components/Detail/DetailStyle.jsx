import styled from 'styled-components';
export const ContentContainer = styled.div`
    width: 100%;
    overflow-x: hidden; /* This will hide horizontal scrollbar */

`;

export const TopContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px; /* 좌우 여백 추가 */

    @media screen and (max-width: 480px) {
        padding: 0 10px; /* 작은 화면에서 더 작은 여백으로 조절 */
    }
`;

export const BackButton = styled.button`
    display: flex;
    justify-content: left;
    font-size: 18px;
    padding:10px;
    margin-right: 170px;
    white-space: nowrap; 

    @media screen and (max-width: 600px) {
        font-size: 15px;
    }
`;

export const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
`;

export const LogoImage = styled.img`
    width: 150px;
    height: auto;
    @media screen and (max-width: 480px) {
        width: 100px;
    }
`;

export const NavTag = styled.button`
    width: 75px;
    height: 65px;
    border-radius: 20px;
    background: #D9D9D9;

    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    color: #FFAC33;
    text-align: center;
    font-size: 30px; 
    background: #D9D9D9; 

    &:hover {
        color: #FFAC33;
        background:#FFEACC; /* 호버 시 그라데이션 변경 */
    }
    @media screen and (max-width: 650px) {
        width: 30px; /* 창의 너비가 500px 미만이면 40px로 설정 */
        font-size: 20px; 
        margin-right: 15px;

    }

    @media screen and (min-width: 650px) and (max-width: 800px) {
        width: 40px; /* 창의 너비가 500px 이상 700px 미만이면 60px로 설정 */
    }
`;

export const NavTagContainer = styled.div`
    display: flex;
    align-items: flex-start; 
    justify-content: flex-end; 
    margin-left: auto;
`;

export const MenuContainer = styled.div`
    text-align: center;
    margin-top: 40px;
`;

export const MenuName = styled.h2`
    font-size: 45px;
    margin-bottom: 16px;
    font-weight: bold;
`;

export const MenuImage = styled.img`
    width: 100%;
    max-width: 400px;
    height: auto;
    margin-bottom: 18px;
    border-radius: 15%;
`;

export const MenuPrice = styled.p`
    margin-bottom: 10px;
    font-weight: bold;
    font-size: 25px;
`;

export const MenuDescription = styled.p`
    font-size: 16px;
    color: #666;
`;

export const ReviewContainer = styled.div`
    text-align: center;
    margin-top: 60px;
`;

export const ReviewTitle = styled.div`
    text-align: center;
    margin-bottom: 10px;
    font-weight: bold;
    font-size: 25px;
    font-family: 'Rosarivo';
`;

export const ReviewLineTop = styled.div`
    margin-top: 17px;
    margin-bottom: 40px;
    color: #666;
`;

export const ReviewLineBottom = styled.div`
    margin-bottom: 17px;
    margin-top: 40px;
    color: #666;
`;

export const ReviewList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 50px;
    margin-left: 30px;

    div {
        display: flex;  
        flex-direction: column;  
        align-items: flex-start; 
        margin-bottom: 90px;

        p.username {
            font-size: 16px;
            font-weight: bold;
            margin-bottom: 8px;
        }

        div.star-container {
            display: flex;
            align-items: center;
            flex-direction: row;
            margin-bottom: 8px;
        }

        p.date {
            font-size: 10px;
            color: #858585;
            margin-bottom: 18px;
        }

        p.content {
            font-size: 14px;
            margin-left: 0;
            margin-bottom: 18px;
        }

        img {
            max-width: 200px; 
            height: auto;
            border-radius: 15%;
            margin-left: 0; 
        }
    }

    p {
        text-align: left;  
    }
`;

export const ReviewFormContainer = styled.div`
    margin-top: 20px;
    width: 100%;

`;

export const ReviewInputBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%; 
    border: 2px solid #FFCF88;
    border-radius: 20px;
    background-color: #FFFAF2;
    padding: 0 20px;
    margin-bottom: 20px;
    font-size: 16px;
    color: #000000;
    justify-content: space-between;

    div{
        margin-right: auto;
        
    }

    button {
        background: none;
        border: none;
        cursor: pointer;
        margin-right: auto;
    }

    form {
        display: flex;
        gap: 10px;
    }

    // 아이콘
    svg {
        color: #FFAC33;
        width: 20px; 
        height: 20px;
    }

`;

export const ReviewTextContainer= styled.div`
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    justify-content: flex-start;

`

export const ReviewNameInput = styled.input`
    flex-grow: 1;
    height: 100%;
    border: none;
    background-color: transparent;
    outline: none;
    resize: none; /* 사용자 크기 조정 비활성화 */
    font-size: 16px; 
    font-weight: bold;
    flex-direction: column;
    color: black;

    &:focus {
        outline: none;
    }
    &::placeholder {
        color: #000000;
    }
    @media screen and (max-width: 412px) {
        font-size: 13px; /* 작은 화면에서 폰트 크기 조절 */
    }
`;

export const ReviewContentInput = styled.textarea`
    font-family: 'Pretendard', sans-serif;
    width: 100%;
    height: 87%;
    background-color: transparent;
    color: black;
    border: none;
    font-size: 16px;
    resize: none; /* 사용자 크기 조정 비활성화 */
    outline: none; /* 포커스 효과 제거 */

    &::placeholder {
        color: #000000;
    }
    &:focus {
        outline: none; /* 포커스 효과 제거 */
    }
    @media screen and (max-width: 412px) {
        font-size: 15px; /* 작은 화면에서 폰트 크기 조절 */
    }
    &::-webkit-scrollbar {
        width: 10px; /* 스크롤바의 두께 지정 */
        border-radius: 5px; /* 스크롤바 모서리를 둥글게 만듭니다. */
    }

    &::-webkit-scrollbar-thumb {
        background-color: #595959;
        border-radius: 5px;
        backdrop-filter: blur(50px);
    }

    &::-webkit-scrollbar-track {
        background-color: #acacac; /* 스크롤바 트랙 색상 지정 */
        border-radius: 5px; /* 스크롤바 모서리를 둥글게 만듭니다. */
    }
`;