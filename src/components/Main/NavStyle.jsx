import styled from 'styled-components';

export const NavWrapper = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3em;
`;

export const NavContent = styled.div`
  display: flex;
  align-items: center; /* 추가 */
  justify-content: space-between; /* 변경 */
`;

export const LogoImage = styled.img`
  width: 200px;
  height: auto;
  @media screen and (max-width: 550px){
    width: 115px;

  }
  @media screen and (min-width: 550px) and (max-width: 800px){
    width: 150px;

  }
`;
export const SearchWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 140px;

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
`;

export const NavInput = styled.input`
  width: calc(100% - 40px);
  height: 70px;
  border-radius: 20px;
  padding: 0 10px;
  padding-left: 10px;

  color: black;
  background-color: #D9D9D9;
  font-size: 17px;
  font-weight: bold;


`;

export const NavTag = styled.a`
  width: 75px;
  height: 75px;
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
  
  @media screen and (max-width: 600px) {
    width: 45px; /* 창의 너비가 500px 미만이면 40px로 설정 */
  }

  @media screen and (min-width: 600px) and (max-width: 700px) {
    width: 60px; /* 창의 너비가 500px 이상 700px 미만이면 60px로 설정 */
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
