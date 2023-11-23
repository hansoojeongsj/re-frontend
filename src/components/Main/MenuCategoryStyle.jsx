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


export const CategoryButtonsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: left;

    /* 각 버튼이 가로로 균등하게 확장되도록 설정 */
    > button {
        flex-grow: 1;
    }
    margin-bottom: 10px; /* 적절한 간격 조정을 위해 마진을 추가했습니다. */

    > div {
        margin: 5px;
        flex-shrink: 1;
    }

`;


export const MenuBox = styled.div`
    background-color: #ffffff;
    border-radius: 20px;
    padding: 20px;
    margin: 5px;
    width: 240px;
    cursor: pointer;
    text-align: center;
    overflow: visible; // 이미지가 테두리에 걸치게
    z-index: 1; // 모달 항상 위로 가게
    

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
    width: auto;  
    box-sizing: border-box;
    white-space: nowrap;   /* 텍스트 가로 */

    @media screen and (max-width: 900px) {
        font-size: 16px;
    }

    @media screen and (min-width: 650px) and (max-width: 800px) {
        max-width: 70%;
        font-size: 13px;
    }


    @media screen  and (max-width: 650px) {
        max-width: 60%;
        margin-right: 0;
        font-size: 12px; 
    }

`;

