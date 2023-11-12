import styled from 'styled-components';

export const NavWrapper = styled.div`
  padding: 3em;
  position: relative;
`;

export const NavContent = styled.div`
  display: flex;
  align-items: center; /* 추가 */
  justify-content: space-between; /* 변경 */
  width: 100%;
`;

export const LogoImage = styled.img`
  width: 200px;
  height: auto;
  @media screen and (max-width: 650px){
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
  @media screen and (max-width: 650px) {
    min-width: 115px;

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
`;

export const ModalContent = styled.div`
  width: 66.66%; /* 모달의 2/3 */
  background-color: #FFFAF3;
  color:  #FFAC33;
  font-size:30px;
  font-weight: bold;
  text-align: center;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 20px;
`;

// 추가로 모달 닫기 버튼을 스타일링
export const CloseButton = styled.button`
  background-color: #FFAC33;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
`;
