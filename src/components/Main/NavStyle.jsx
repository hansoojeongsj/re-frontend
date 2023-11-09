import styled from 'styled-components';

export const NavWrapper = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3em;
  padding-bottom: 8em;
`;

export const NavContent = styled.div`
  display: flex;
  align-items: center; /* 추가 */
  justify-content: space-between; /* 변경 */
  margin-bottom: 90px;
`;

export const LogoImage = styled.img`
  width: 200px;
  height: auto;
`;
export const NavInput = styled.input`
  width: 700px;
  height: 60px;
  border-radius: 20px;
  padding: 0 10px;
  color: black;
  background-color: #D9D9D9;
  font-size: 17px;
  font-weight: bold;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); /* 그림자 효과 */

  /* 기타 스타일들 */
`;

export const NavTag = styled.a`
  width: 80px;
  height: 80px;
  border-radius: 20px;
  background: #D9D9D9;

  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  color: #FFAC33;
  text-align: center;
  font-size: 20px;
  font-weight: 700;

  &:hover {
    color: white;
    box-shadow: 0px 4px 4px 4px rgba(0, 0, 0, 0.25); /* 그림자 효과 */
  }

  @media screen and (max-width: 900px) {
    display: none;
  }
`;