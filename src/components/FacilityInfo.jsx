import React from 'react';
import styled from 'styled-components';

const FacilityInfo = (...props) => {
  const images = props[0].images;

  return (
    <React.Fragment>
      {images.map((v, idx) => {
        return <Image key={idx} src={v.center} alt={`center${idx + 1}`} />;
      })}
    </React.Fragment>
  );
};

export default FacilityInfo;

const Image = styled.img`
  width: 100%;
  height: 100%;
  margin-bottom: 25px;
`;
