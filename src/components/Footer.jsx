import React from 'react';
import styled from 'styled-components';
import * as Font from '@components/Font';

const Footer = () => {
  return (
    <Wrapper>
      <div>
        <Font.FontSize16>상호명 : 남스짐 컴퍼니</Font.FontSize16>
        <Font.FontSize16>사업자등록번호 : 남스짐 컴퍼니</Font.FontSize16>
        <Font.FontSize16>주소 : 부천시 옥길동745-5 퀸즈파크 C동 617호</Font.FontSize16>
        <Font.FontSize16>채용문의 : 이메일 | 전화번호</Font.FontSize16>
        <Font.FontSize16>대표번호 : 전화번호</Font.FontSize16>
      </div>

      <InnerWrapper>
        <Font.FontSize14>
          본 페이지에 이미지는 남스짐의 고유한 재산 입니다. 무단으로 도용시 법적 처벌을 요구할 수 있습니다.
        </Font.FontSize14>
        <Font.FontSize12>(C) 2022. NamsGym ALL RIGHTS RESERVED.</Font.FontSize12>
      </InnerWrapper>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  height: 250px;
  padding: 150px 120px;
  background-color: #c1c1c1;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);

  p {
    margin: 8px 0px;
    font-weight: 500;
  }
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  p {
    color: ${({ theme }) => theme.colors.MainGray};
    font-weight: bold;
  }
`;
