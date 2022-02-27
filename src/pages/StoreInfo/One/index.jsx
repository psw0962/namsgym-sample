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
  trainer2,
  trainer3,
  trainer4,
  trainer5,
  trainer6,
  trainer7,
} from '@assets/svg/one';

const centerimages = [{ center: center1 }, { center: center2 }, { center: center3 }, { center: center4 }];

const trainerimages = [
  { trainer: trainer1 },
  { trainer: trainer2 },
  { trainer: trainer3 },
  { trainer: trainer4 },
  { trainer: trainer5 },
  { trainer: trainer6 },
  { trainer: trainer7 },
];

// Main
const mainHeader = {
  info: {
    title: '안산신길 1호점',
    subtitle: '안산신길 1호점 안내 및 지점소개',
  },
};

const One = () => {
  const [tabState, setTabState] = useState(0);

  return (
    <React.Fragment>
      <Main mainHeader={mainHeader.info}>
        <TabContainer setTabState={setTabState} url="https://pf.kakao.com/_FxgHWd" />

        <Line />

        {tabState === 0 && <FacilityInfo images={centerimages} />}
        {tabState === 1 && <TrainerInfo images={trainerimages} />}
        {tabState === 2 && <Map city="안산신길동710-2" phone="031-492-3337" />}
      </Main>
    </React.Fragment>
  );
};

export default One;
