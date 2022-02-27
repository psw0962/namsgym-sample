import React, { useState } from 'react';
import Main from '@components/Main';
import Line from '@components/Line';
import FacilityInfo from '@components/FacilityInfo';
import TrainerInfo from '@components/TrainerInfo';
import Map from '@components/Map';
import TabContainer from '@components/TabContainer';

import styled from 'styled-components';
import * as Font from '@components/Font';
import kakao from '@assets/svg/kakao.svg';

// import {
//   center1,
//   center2,
//   center3,
//   center4,
//   trainer1,
//   trainer2,
//   trainer3,
//   trainer4,
//   trainer5,
//   trainer6,
//   trainer7,
// } from '@assets/svg/eight';

// const centerimages = [{ center: center1 }, { center: center2 }, { center: center3 }, { center: center4 }];

// const trainerimages = [
//   { trainer: trainer1 },
//   { trainer: trainer2 },
//   { trainer: trainer3 },
//   { trainer: trainer4 },
//   { trainer: trainer5 },
//   { trainer: trainer6 },
//   { trainer: trainer7 },
// ];

// Main
const mainHeader = {
  info: {
    title: '군포산본 8호점',
    subtitle: '군포산본 8호점 안내 및 지점소개',
  },
};

const Eight = () => {
  const [tabState, setTabState] = useState(0);

  return (
    <React.Fragment>
      <Main mainHeader={mainHeader.info}>
        <Wrapper>
          <h2>준비중 입니다.</h2>

          <KakaoBox href="https://pf.kakao.com/_STxcrb" target="_blank">
            <KakaoImg src={kakao} alt="kakao" />
            <FontSize12>카카오톡 간편문의</FontSize12>
          </KakaoBox>
        </Wrapper>
        {/* <TabContainer setTabState={setTabState} url="" />

        <Line />

        {tabState === 0 && <FacilityInfo images={centerimages} />}
        {tabState === 1 && <TrainerInfo images={trainerimages} />}
        {tabState === 2 && <Map city="" phone="" />} */}
      </Main>
    </React.Fragment>
  );
};

export default Eight;

const Wrapper = styled.div`
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const KakaoImg = styled.img`
  width: 15px;
  height: 15px;
`;

const KakaoBox = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 140px;
  height: 35px;
  margin-top: 25px;
  border: 1px solid ${({ theme }) => theme.colors.MainGray};
  border-radius: 10px;
  cursor: pointer;
  white-space: nowrap;
  background-color: #fef01b;

  &:hover {
    transition: 0.5s;
    box-shadow: 1px 1px 1px;
  }

  @media (max-width: 1000px) {
    box-shadow: 1px 1px 1px;
  }
`;

const FontSize12 = styled(Font.FontSize12)`
  font-weight: bold;
`;
