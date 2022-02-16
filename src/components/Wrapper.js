import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  gap: 24px;
  margin-bottom: 35px;
  max-width: 1179px;

  div:nth-child(1) {
    max-height: 523px;
  }

  @media (max-width: 1100px) {
    flex-direction: column;
    width: 80%;
  }
`;

export default Wrapper;
