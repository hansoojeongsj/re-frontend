import styled from 'styled-components';

export const MenuCategoryContainer = styled.div` // 토글메뉴 전체
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 3em;
`;

export const MenuBox = styled.div`
    background-color: #ffffff;
    border-radius: 20px;
    padding: 20px;
    margin: 5px;
    width: 200px;
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

