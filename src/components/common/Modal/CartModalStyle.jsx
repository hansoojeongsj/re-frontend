import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 50%;
  background-color: rgba(0, 0, 0, 0); /* 완전히 투명한 배경 */
  display: flex;
  justify-content: flex-end;
  z-index: 999;
  @media screen and (min-width: 800px) and (max-width:1120px) {
    width: 70%;
  }
  @media screen and (min-width: 600px) and (max-width:800px) {
    width: 80%;
  }
  @media screen and (max-width: 600px) {
    width: 140%;
  }
`;
export const ModalContent = styled.div`
  width: 66.66%;
  background-color: #FFFAF3;
  color: #FFAC33;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


export const ModalCloseButton = styled.button`
  display: flex;
  font-size: 25px;
  padding:10px;
  color:  #FFAC33;
  cursor: pointer;
  align-self: flex-start;
  transition: transform 0.3s; /* 호버 시에 애니메이션을 부드럽게 적용하기 위한 transition */

  &:hover {
    transform: scale(1.3);
  }

`;

export const ModalTitle = styled.a`
  margin: 15px;
  font-size: 40px;
  @media screen and (max-width: 800px) {
    font-size: 30px;

  }
`;

export const CartListContainer = styled.div`
  width: 100%;
  overflow-y: auto; /* 수직 스크롤 활성화 */
  overflow-x: hidden; /* 가로 스크롤 방지 */

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

export const CartList = styled.div`
  color: black;

  width: 90%;
  height: 90px;
  background-color: white;
  border: 1.5px solid #FFAC33;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  margin: 10px;
  position: relative;
  justify-content: flex-start; /* 이 부분을 수정해서 내용물을 왼쪽으로 정렬합니다. */
  padding: 3%;
`;
export const ListDeleteButton = styled.button`
  position: absolute; /* 부모 요소를 기준으로 위치를 조절합니다. */
  top: 5px; /* 원하는 상단 여백 값으로 조절하세요 */
  right: 10px; /* 원하는 우측 여백 값으로 조절하세요 */
  display: flex;
  font-size: 20px;
  padding: 10px;
  color: #FFAC33;
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.3);
  }
  `;


export const ModalContainer = styled.div`
  width: 90%;
  margin-top: auto;
  margin-bottom: 20px;  

`;


export const CartTotal = styled.div`
  color: black;
  border: 2.5px solid #FFAC33;
  background-color: white;
  border-radius: 30px;
  margin-top: 20px;
  margin-bottom: 5px;
  align-items: center; /* 수평 가운데 정렬 */
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 15px; /* 적절한 패딩 설정 */
`;


export const PayingButton = styled.button`
  background-color: #FFAC33;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 18px;
  width: 90%;
  height: 70px;
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
    width: 60%;
    height: 60px;
    font-size: 25px;

  }
`;
export const LoginMessage = styled.div`
  margin-top: 10px;
  margin-bottom: 20px;
  color: #FFAC33;
  font-size: 20px;
  text-align: center;
  font-family: 'Pretendard', sans-serif;
  font-weight: bold;
  @media screen and (max-width: 600px) {
    font-size: 16px;
  }
`;
export const LoginButton=styled.button`
  width: 30%;
  height: 50px;
  color: white;
  background-color:#FFAC33;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;  
  cursor: pointer;
  font-size: 20px;
  &:hover {
  background-color: white;
  border: 2px solid #FFAC33;
  color: #FFAC33;
  box-shadow: 0px 4px 4px 2px rgba(255, 172, 51, 0.25); /* 그림자 효과 */

}
`;

export const CartItemImage = styled.img`
  height: 100%;
  border-radius: 50%;
  margin-right: 20px; /* 사진 오른쪽 여백 설정 */
  width: 25%;
`;

export const CartItemContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

`;

export const CartItemName = styled.a`
  font-size: 17px;
  margin-bottom: 5px; /* 아이템 이름과 가격 사이 여백 설정 */
`;

export const CartItemPrice = styled.a`
  font-size: 15px;
  font-weight: normal;

`;
export const TotalTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

export const TotalNum = styled.div`
  font-weight: normal;
`;

export const TotalInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%; /* 또는 적절한 폭 설정 */
  padding: 10px; /* 적절한 패딩 설정 */
  font-size: 17px;
  `;
