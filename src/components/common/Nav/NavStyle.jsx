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
  margin-bottom: 90px;
  justify-content: end;
`;

export const NavTag = styled.a`
  width: 150px;
  height: 45px;
  border-radius: 50px;
  background: #D9D9D9;

  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  color: #FFAC33;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  text-align: center;

  &:hover {
    color: white;
    box-shadow: 0px 4px 4px 4px rgba(0, 0, 0, 0.25) inset;
  }

  @media screen and (max-width: 900px) {
    display: none;
  }
`;
