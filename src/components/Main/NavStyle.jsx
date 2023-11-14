import styled from 'styled-components';

export const NavWrapper = styled.div`
  padding: 3em;
  position: relative;
  @media screen and (max-width: 370px){
    padding: 1em;
  }
`;

export const NavContent = styled.div`
  display: flex;
  align-items: center; /* 추가 */
  justify-content: space-between; /* 변경 */
  width: 100%;
  @media screen and (max-width: 650px){
    margin-bottom: 7px;
}
`;

export const LogoImage = styled.img`
  width: 200px;
  height: auto;
  @media screen and (max-width: 370px){
    width: 70px;

  }
  @media screen and (min-width: 370px) and (max-width: 650px){
    width: 100px;

  }
  @media screen and (min-width: 650px) and (max-width: 800px){
    width: 150px;

  }

`;
export const SearchWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 140px;
  @media screen and (min-width: 481px) and (max-width: 650px) {
    min-width: 115px;

  }
  @media screen and (max-width: 480px) {
    display: none;

  }
`;

export const GrayBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background: #D9D9D9;
  padding: 5px;
  border-radius: 20px;
  margin-right: 20px; 
  box-shadow: 0px 4px 4px 4px rgba(0, 0, 0, 0.25); /* 그림자 효과 */
  color: #FFAC33;
  font-size: 30px;
  padding-left: 20px;
  @media screen and (max-width: 650px) {
  font-size: 20px; 
  padding-left: 10px;
  margin-right: 15px; 

  }
`;

export const NavInput = styled.input`
  width: calc(100% - 40px);
  height: 60px;
  border-radius: 20px;
  padding: 0 10px;
  padding-left: 10px;

  color: black;
  background-color: #D9D9D9;
  font-size: 17px;
  font-weight: bold;
  @media screen and (max-width: 650px) {
  padding-left: 5px;
  font-size: 15px;

  }

`;

export const NavTag = styled.a`
  cursor: pointer;

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
  box-shadow: 0px 4px 4px 4px rgba(0, 0, 0, 0.25); /* 그림자 효과 */

  &:hover {
    color: #FFEACC;
  }
  @media screen and (max-width: 370px) {
    width: 20px; 
    height: 50px;
    font-size: 15px; 
    margin-right: 15px;

  }
  @media screen and (min-width: 30px) and (max-width: 650px) {
    width: 25px; 
    font-size: 20px; 
    margin-right: 15px;

  }

  @media screen and (min-width: 650px) and (max-width: 800px) {
    width: 40px; 
  }
`;

export const NavTagContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end; /* 아이콘들을 오른쪽으로 정렬 */

`;
export const TodayMenuImage = styled.img`
  width: 100%; // 이미지 너비를 100%로 설정
  height: 200px; // 이미지 높이를 자동으로 조정

`;
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
  font-size: 20px;
  padding:10px;
  color:  #FFAC33;
  cursor: pointer;
  align-self: flex-start;

`;

export const ModalTitle = styled.a`
  margin: 10px;
`;

export const CartListContainer = styled.div`
  width: 100%;
  overflow-y: auto; /* 수직 스크롤 활성화 */
  overflow-x: hidden; /* 가로 스크롤 방지 */

  &::-webkit-scrollbar {
  width: 7px; 
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
  width: 90%;
  height: 80px;
  background-color: white;
  border: 1.5px solid #FFAC33;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  margin: 20px;
`;

export const ModalContainer = styled.div`
  width: 90%;
  margin-top: auto;
  margin-bottom: 20px;  

`;

export const CartTotal = styled.div`
  width: 100%;
  height: 80px;
  background-color: white;
  border: 2.5px solid #FFAC33;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  margin-bottom: 20px;
  margin-top:20px;
  `;
export const PayingButton = styled.button`
  background-color: #FFAC33;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 18px;
`;
