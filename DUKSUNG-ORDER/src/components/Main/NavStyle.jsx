import styled from 'styled-components';
import Slider from "react-slick";

export const NavWrapper = styled.div`
  padding-top: 1em;
  padding-left: 3em;
  padding-right: 3em;
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
  font-size: 15px;
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

  background: #D9D9D9; 

  &:hover {
    color: #FFAC33;
    background:#FFEACC; /* 호버 시 그라데이션 변경 */
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


export const StyledCarousel = styled(Slider)`

    .carousel-inner {
      width: 100%;
      height: 350px; /* 이미지 높이 변경 */
      padding-left: 20px;
    }

    .slick-prev:before, .slick-next:before{ //얘는 양옆 버튼. 커스텀 해줘야 보임
        font-family: 'slick';
        font-size: 35px;
        line-height: 1;
        opacity: .75;
        color: #FFAC33;
        -webkit-font-smoothing: antialiased;
    }

    @media screen and (max-width: 390px) {
      .slick-prev:before,
      .slick-next:before {
        font-size: 20px;
      }
`;




