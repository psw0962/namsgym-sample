import React, { useState } from 'react';
import Main from '@components/Main';
import Line from '@components/Line';
import FacilityInfo from '@components/FacilityInfo';
import TrainerInfo from '@components/TrainerInfo';
import Map from '@components/Map';
import TabContainer from '@components/TabContainer';
import {
  center1,
  center2,
  center3,
  center4,
  trainer1,
  trainer3,
  trainer4,
  trainer5,
  trainer6,
  trainer7,
  trainer8,
} from '@assets/svg/five';

const centerimages = [{ center: center3 }, { center: center4 }, { center: center1 }, { center: center2 }];

const trainerimages = [
  { trainer: trainer1 },
  { trainer: trainer3 },
  { trainer: trainer4 },
  { trainer: trainer5 },
  { trainer: trainer6 },
  { trainer: trainer7 },
  { trainer: trainer8 },
];

// Main
const mainHeader = {
  info: {
    title: '시흥능곡 5호점',
    subtitle: '시흥능곡 5호점 안내 및 지점소개',
  },
};

const Five = () => {
  const [tabState, setTabState] = useState(0);

  return (
    <React.Fragment>
      <Main mainHeader={mainHeader.info}>
        <TabContainer setTabState={setTabState} url="https://pf.kakao.com/_HueSK" />

        <Line />

        {tabState === 0 && <FacilityInfo images={centerimages} />}
        {tabState === 1 && <TrainerInfo images={trainerimages} />}
        {tabState === 2 && <Map city="경기도 시흥시 능곡동747 3층" phone="031-317-7377" />}
      </Main>
    </React.Fragment>
  );
};

export default Five;
