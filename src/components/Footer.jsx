import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return <Wrapper>footer</Wrapper>;
};

export default Footer;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 150px;
  background-color: #c1c1c1;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
`;
