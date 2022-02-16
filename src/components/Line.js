import styled from 'styled-components';

const Line = styled.hr`
  width: 100%;
  margin: 25px 0px;
  color: ${({ theme }) => theme.colors.MainGray};
`;

export default Line;
