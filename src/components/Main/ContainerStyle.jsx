import styled from 'styled-components';

export const Container = styled.div`
  background-color: #FFEACC;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3em;
  @media screen and (max-width: 700px) {
    padding: 2em;

  }
`;
export const WhiteBox = styled.div`
  background-color: #ffffff;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.25), 5px 0px 5px -3px rgba(0, 0, 0, 0.25);

`;