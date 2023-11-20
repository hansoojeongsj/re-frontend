import styled from 'styled-components';

export const MenuCategoryContainer = styled.div` // 토글메뉴 전체
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 3em;

    @media screen and (max-width: 900px) {
        padding: 1em;
    }
`;

export const MenuBox = styled.div`
    background-color: #ffffff;
    border-radius: 20px;
    padding: 20px;
    margin: 5px;
    width: ${({ menuBoxWidth }) => menuBoxWidth};
    cursor: pointer;
    text-align: center;
    overflow: visible; // 이미지가 테두리에 걸치게

    img {
        max-width: 100px;
        //margin-bottom: 5px;
        border-radius: 40%;
        position: relative;
        top: -25px;
    }

    .menu-info {  
        border: 1px solid #ddd; //테두리
        height: 200px; // 테두리 높이 고정
        padding: 10px; 
        border-radius: 30px; 
        box-shadow: 0px 2px 2px 2px rgba(0, 0, 0, 0.25);
    }

    .menu-name {
        font-weight: bold;
        font-size: 1.9em;
        margin-bottom: 3px;

        &:hover {
            color: #FFAC33;
        }
    }

    .menu-price {
        margin-top: 10px;
        font-size: 1.6em;
        margin-bottom: 30px;
    }


`;

export const StyledButton = styled.button`  // 토글 카테고리 
    padding: 10px;
    margin: 5px;
    background: ${({ selected }) => (selected ? '#FFEACC' : 'transparent')};
    font-weight: bold;
    font-size: ${({ buttonFontSize }) => buttonFontSize};
    width: 100%;  
    box-sizing: border-box;

    @media screen and (min-width: 370px) and (max-width: 650px) {
        width: 50%;
        font-size: 12px; 
    }

    @media screen and (min-width: 650px) and (max-width: 800px) {
        width: 70%;
    }

    @media screen and (max-width: 900px) {
        font-size: 16px;
    }
`;


// @media screen and (max-width: 370px) {
//     width: 30%; 
//     font-size: 5px; 

// }
// @media screen and (min-width: 30px) and (max-width: 650px) {
//     width: 50%;
//     font-size: 13px; 
// }

// @media screen and (min-width: 650px) and (max-width: 800px) {
//     font-size: 16px; 
//     width: 70%;
// }
