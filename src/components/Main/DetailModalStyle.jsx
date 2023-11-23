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
    background: white;
    padding: 20px;
    border-radius: 10px;
    width: 40%;
    height: auto;
    z-index: 3; // 모달이 MenuBox 위에 나타날 수 있도록 조절
    
    @media screen and (min-width: 600px) and (max-width:800px) {
        width: 60%;
    }
    @media screen and (max-width: 600px) {
        width: 80%;
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

export const ModalTitle = styled.a`
    font-size: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    padding: 10px;
    @media screen and (max-width: 600px){
        font-size: 30px;

}
`;

export const PayingList = styled.div`
    width: 100%;
    overflow-y: auto; /* Vertical scrolling enabled */
    overflow-x: hidden; /* Horizontal scrolling disabled */
    margin-top: 10px;
    margin-bottom: 10px;
    height: auto;
    max-height: 180px;
    &::-webkit-scrollbar {
    width: 8px; 
}

&::-webkit-scrollbar-thumb {
    background-color: #FFAC33;
    border-radius: 5px;
    backdrop-filter: blur(50px);
}

&::-webkit-scrollbar-track {
    background-color: #ffffff;
    border-radius: 5px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.2) inset;
}

`;
export const PayingMenu = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%; /* 또는 적절한 폭 설정 */
    padding: 10px; /* 적절한 패딩 설정 */
    font-size: 17px;
`;
export const DivWrapper = styled.div`
    white-space: pre-line;
`;
export const MKTitle = styled.a`
    width: 100px;
    text-align: center;
`;
export const PayingListTitle = styled.a`
    width: 100px;
    font-weight: bold;
    display: flex;
    align-items: center;
    text-align: center;
`;
export const PayingCount = styled.a`
    display: flex;
    align-items: center;
`;
export const PayingPrice = styled.a`
    display: flex;
    align-items: center;
`;
export const PayingTotal = styled.div`
    align-items: center; /* 수평 가운데 정렬 */
    width: 80%;
    margin: 0 auto; /* 가로 중앙 정렬 */
    display: flex;
    flex-direction: column;
    padding: 10px; /* 적절한 패딩 설정 */
    margin-bottom: 20px;
`;

export const BottomTitle= styled.a`
    font-weight: bold;

`;
export const BottomNum= styled.a``;


export const OkButton = styled.button`
    background-color: #FFAC33;
    color: white;
    border: none;
    cursor: pointer;
    font-size: 15px;
    width: 40%;
    height: 60px;
    font-size: 30px;
    border-radius: 50px;
    font-weight: bold;
    margin: 0 auto;
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
        font-size: 25px;

    }
`;
