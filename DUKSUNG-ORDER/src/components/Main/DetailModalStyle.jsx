import styled from 'styled-components';

export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); /* 반투명한 배경색 */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2; // 모달이 MenuBox 위에 나타날 수 있도록 조절
`;

export const ModalContent = styled.div`
    display: flex;
    background: white;
    padding: 20px;
    border-radius: 10px;
    width: 40%;
    height: auto;
    max-height: 700px;
    z-index: 3; // 모달이 MenuBox 위에 나타날 수 있도록 조절
    flex-direction: column;
    align-items: center;
    
    @media screen and (min-width: 600px) and (max-width:800px) {
        width: 70%;
    }
    @media screen and (max-width: 600px) {
        width: 60%;
    }
    
`;

export const CloseButton = styled.button`
    display: flex;
    font-size: 20px;
    padding:10px;
    color:  #FFAC33;
    cursor: pointer;
    align-self: flex-start;
    transition: transform 0.3s; /* 호버 시에 애니메이션을 부드럽게 적용하기 위한 transition */

    &:hover {
        transform: scale(1.2); /* 호버 시에 크기를 1.2배로 확대 */
    }

`;

export const MenuImage = styled.img`
    width: 60%; 
    height: auto; 
    margin: 0 auto 5px;
    max-width: 80%;
    max-height: 250px; 
    object-fit: contain; 
    border-radius: 15%;
`;

export const MenuTitle = styled.a`
    font-size: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    padding: 10px;
    margin-top: 5px;

    @media screen and (max-width: 600px){
        font-size: 30px;
    }
`;

export const InfoMenu = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%; /* 또는 적절한 폭 설정 */
    padding: 10px; /* 적절한 패딩 설정 */
    font-size: 17px;
`;


export const MenuDescription = styled.a`
    width: 100px;
    text-align: center;
    margin-top: 5px;
    font-size: 12px;
`;

export const MenuPrice = styled.a`
    width: 100%;
    font-weight: bold;
    font-size: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 30px;

`;

export const MenuTotal = styled.div`
    align-items: center; /* 수평 가운데 정렬 */
    width: 100%;
    margin: 0 auto; /* 가로 중앙 정렬 */
    display: flex;
    flex-direction: column;
    padding: 10px; /* 적절한 패딩 설정 */
    margin-bottom: 20px;
`;


export const MenuCount = styled.a`
    display: flex;
    align-items: center;
    margin-top: 27px;
    gap: 10px;
    font-size: 25px;

    a{
        margin-left: 10px;
        margin-right: 10px;
        font-size: 25px;
        font-weight: bold;
    }

    svg{
        color: #F9881F;
        width:25px;
        height:25px;
    }
`;


export const CartButton = styled.button`
    background-color: #FFAC33;
    color: white;
    border: none;
    cursor: pointer;
    width: 55%;
    height: 60px;
    font-size: 20px;
    border-radius: 20px;
    font-weight: bold;
    margin: 5px auto 0;
    font-family: 'Pretendard', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    padding:10px;
    transition: background-color 0.3s, color 0.3s, box-shadow 0.3s; /* 호버 시에 애니메이션을 부드럽게 적용하기 위한 transition */

    &:hover {
        background-color: white;
        border: 2px solid #FFAC33;
        color: #FFAC33;
        box-shadow: 0px 4px 4px 2px rgba(255, 172, 51, 0.25); /* 그림자 효과 */
    }
    @media screen and (max-width: 600px){
        width: 50%;
        height: 60px;
        font-size: 20px;
    }

`;


export const showReviewText = styled.div`
    color: black;
    width: 40%;
    height: 30px;
    font-size: 15px;
    font-weight: bold;
    margin: 5px auto 20px;
    font-family: 'Pretendard', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    padding:10px;
    transition: background-color 0.3s, color 0.3s, box-shadow 0.3s; /* 호버 시에 애니메이션을 부드럽게 적용하기 위한 transition */
    white-space: nowrap; /* 텍스트가 한 줄로만 표시되도록 설정 */

    &:hover {
        text-decoration: underline;
    }
    
    @media screen and (max-width: 600px){
        width: 50%;
        height: 60px;
        font-size: 13px;

    }
`;


