import React, { useState } from 'react';
import styled from 'styled-components';
import Main from '@components/Main';
import TrainerInfo from './TrainerInfo';
import FacilityInfo from './FacilityInfo';
import Contact from './Contact';
import Map from './Map';
import Line from '@components/Line';
import TabData from '@components/TabData';
import * as Font from '@components/Font';

// Main
const mainHeader = {
  info: {
    title: '안산고잔 1호점',
    subtitle: '안산고잔 1호점의 지점소개 페이지 입니다.',
  },
};

const One = () => {
  const [tabState, setTabState] = useState(0);

  return (
    <React.Fragment>
      <Main mainHeader={mainHeader.info}>
        <TabBoxWrapper>
          {TabData.map((v, idx) => {
            return (
              <TabBox key={idx} onClick={() => setTabState(v.tabIdx)}>
                <FontSize10>{v.tabname}</FontSize10>
              </TabBox>
            );
          })}
        </TabBoxWrapper>

        <Line />

        {tabState === 0 && <FacilityInfo />}
        {tabState === 1 && <TrainerInfo />}
        {tabState === 2 && <Contact />}
        {tabState === 3 && <Map />}
      </Main>
    </React.Fragment>
  );
};

export default One;

const TabBoxWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 30px;

  @media (max-width: 495px) {
    flex-direction: column;
  }
`;

const TabBox = styled.div`
  width: 80px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  border: 1px solid ${({ theme }) => theme.colors.MainGray};
  border-radius: 10px;
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    transition: 0.5s;
    box-shadow: 1px 1px 1px;
  }

  @media (max-width: 1000px) {
    box-shadow: 1px 1px 1px;
  }
`;

const FontSize10 = styled(Font.FontSize10)`
  font-weight: bold;
`;
