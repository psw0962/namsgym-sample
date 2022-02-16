import React, { useState } from 'react';
import styled from 'styled-components';
import Main from '@components/Main';
import TrainerInfo from './TrainerInfo';
import FacilityInfo from './FacilityInfo';
import Line from '@components/Line';
import TabData from '@components/TabData';

// Main
const mainHeader = {
  info: {
    title: '천왕 4호점',
    subtitle: '천왕 4호점의 지점소개 페이지 입니다.',
  },
};

const Four = () => {
  const [tabState, setTabState] = useState(0);

  return (
    <React.Fragment>
      <Main mainHeader={mainHeader.info}>
        <TabBoxWrapper>
          {TabData.map((v, idx) => {
            return (
              <TabBox key={idx} onClick={() => setTabState(v.tabIdx)}>
                {v.tabname}
              </TabBox>
            );
          })}
        </TabBoxWrapper>

        <Line />

        {tabState === 0 && <FacilityInfo />}
        {tabState === 1 && <TrainerInfo />}
      </Main>
    </React.Fragment>
  );
};

export default Four;

const TabBoxWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 30px;
`;

const TabBox = styled.div`
  width: 80px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  border: 1px solid ${({ theme }) => theme.colors.MainGray};
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    transition: 0.5s;
    background-color: ${({ theme }) => theme.colors.MainGray};
  }
`;
