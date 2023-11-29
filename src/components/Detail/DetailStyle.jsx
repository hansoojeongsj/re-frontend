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

export const ReviewAvgContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    
`

export const ReviewAvg = styled.div`
    flex-direction: column;
    align-items: center;

    .AvgText{
        font-weight: bold;
        font-size: 40px;
        color: black;
        margin-bottom: 10px;
        text-align: center;
    }

    .star-container-avg {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        margin-left: 0;
    }

    svg {
        color: #FFAC33;
        width: 27px; 
        height: 28px;
        margin-right: 5px;
    }
`;

export const ReviewRatingBar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 20px;

    span {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-right: 20px;
        margin-bottom: 10px;


        .bar-label {
            font-size: 14px;
            margin-bottom: 5px;
            margin-right: 10px;
        }

        .bar-container {
            width: 60px;
            height: 10px;
            position: relative;

            .yellow-bar {
                background-color: #FFAC33; 
                width: ${(props) => props.percent || '0%'};
                height: 100%;
                border-radius: 5px;
            }   
        }
    }
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

        p.date {
            font-size: 10px;
            color: #858585;
            margin-bottom: 8px;
        }

        div.star-container {
            display: flex;
            align-items: center;
            flex-direction: row;
            margin-bottom: 20px;
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

    svg {
        color: #FFAC33;
        width: 15px; 
        height: 15px;
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
    
    div{
        margin-right: auto;
        width: 15%;
    }

    form {
        display: flex;
        width: 100%;
        gap: 10px;
        justify-content: space-between;
    }

    // 아이콘
    svg {
        color: #FFAC33;
        width: 20px; 
        height: 20px;
    }

`;

export const ReviewButton = styled.div`
    background: none;
    border: none;
    cursor: pointer;
    margin-right: auto;
    padding: 20px 0px 20px 20px;

    label{
        margin-right: 25px;
    }

`

export const ReviewTextContainer= styled.div`
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    justify-content: flex-start;
    margin-left: 30px;
    margin-top: 20px;

`
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
        color: #A1A0A0;
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

