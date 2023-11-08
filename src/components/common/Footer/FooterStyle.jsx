import styled, { css } from 'styled-components';

const resposiveFontSize = css`
  @media screen and (max-width: 800px) {
    font-size: 15px;
  }
  @media screen and (max-width: 400px) {
    font-size: 12px;
  }
  @media screen and (max-width: 300px) {
    font-size: 10px;
  }
`;

export const FooterWrapper = styled.div`
  background-color: #FFEACC;
  padding: 3em;
  padding-bottom: 8em;
  letter-spacing: 2px;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 2rem;
  margin-top: 10rem;
`;

export const Category = styled.div`
  width: 320px;
  color: black;
  font-size: 20px;
  font-weight: bold;
  margin-right: 5rem;

  word-break: keep-all;
  ${resposiveFontSize};

  @media screen and (max-width: 820px) {
    width: 30rem;
  }
  @media screen and (max-width: 700px) {
    width: 45rem;
  }
  @media screen and (max-width: 400px) {
    width: 60rem;
  }
  @media screen and (max-width: 300px) {
    width: 70rem;
  }
`;

export const Names = styled.div`
  width: 1600px;
  display: flex;
  flex-direction: row;
  color: black;
  font-size: 20px;
  flex-wrap: wrap;

  word-break: keep-all;

  ${resposiveFontSize};
`;

export const NameEach = styled.div`
  padding-bottom: 2rem;
`;
export const InfoContainer = styled.div`
  margin-top: 1rem;
`;

export const Info = styled.div`
  color: #000;
  font-size: 18px;
  word-break: keep-all;
  font-style: normal;
  line-height: normal;
  margin-bottom: 1rem;

  @media screen and (max-width: 880px) {
    font-size: 16px;
  }

  @media screen and (max-width: 680px) {
    font-size: 13px;
  }

  @media screen and (max-width: 600px) {
    font-size: 11px;
  }
  @media screen and (max-width: 530px) {
    font-size: 9.5px;
  }
`;
