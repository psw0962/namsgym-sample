import React from 'react';
import styled from 'styled-components';
import KakaoMap from '@components/KakaoMap';
import * as Font from '@components/Font';

const Map = ({ city, phone }) => {
  return (
    <React.Fragment>
      <Wrapper>
        <FontSize16>주소 : {city}</FontSize16>
        <FontSize16>문의 전화 : {phone}</FontSize16>
      </Wrapper>

      <KakaoMap city={city} />
    </React.Fragment>
  );
};

export default Map;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const FontSize16 = styled(Font.FontSize16)`
  font-weight: bold;
  margin: 5px 0px;
`;
