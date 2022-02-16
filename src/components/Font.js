import styled, { css } from 'styled-components';

const defaultOption = css`
  color: ${({ theme }) => theme.colors.MainBlack};
  font-weight: ${({ theme }) => theme.weight.regular};
`;

export const FontSize30 = styled.p`
  ${defaultOption}
  font-size: ${({ theme }) => theme.sizes.font30};
`;

export const FontSize24 = styled.p`
  ${defaultOption}
  font-size: ${({ theme }) => theme.sizes.font24};
`;

export const FontSize22 = styled.p`
  ${defaultOption}
  font-size: ${({ theme }) => theme.sizes.font22};
`;

export const FontSize20 = styled.p`
  ${defaultOption}
  font-size: ${({ theme }) => theme.sizes.font20};
`;

export const FontSize18 = styled.p`
  ${defaultOption}
  font-size: ${({ theme }) => theme.sizes.font18};
`;

export const FontSize16 = styled.p`
  ${defaultOption}
  font-size: ${({ theme }) => theme.sizes.font16};
`;

export const FontSize14 = styled.p`
  ${defaultOption}
  font-size: ${({ theme }) => theme.sizes.font14};
`;

export const FontSize12 = styled.p`
  ${defaultOption}
  font-size: ${({ theme }) => theme.sizes.font12};
`;

export const FontSize10 = styled.p`
  ${defaultOption}
  font-size: ${({ theme }) => theme.sizes.font10};
`;

// h1 - title
const defaultH1Option = css`
  color: ${({ theme }) => theme.colors.MainBlack};
`;

export const H130 = styled.h1`
  ${defaultH1Option}
  font-size: ${({ theme }) => theme.sizes.font30};
`;

export const H124 = styled.h1`
  ${defaultH1Option}
  font-size: ${({ theme }) => theme.sizes.font24};
`;

export const H122 = styled.h1`
  ${defaultH1Option}
  font-size: ${({ theme }) => theme.sizes.font22};
`;

export const H120 = styled.h1`
  ${defaultH1Option}
  font-size: ${({ theme }) => theme.sizes.font20};
`;

export const H118 = styled.h1`
  ${defaultH1Option}
  font-size: ${({ theme }) => theme.sizes.font18};
`;

export const H116 = styled.h1`
  ${defaultH1Option}
  font-size: ${({ theme }) => theme.sizes.font16};
`;

export const H114 = styled.h1`
  ${defaultH1Option}
  font-size: ${({ theme }) => theme.sizes.font14};
`;

export const H112 = styled.h1`
  ${defaultH1Option}
  font-size: ${({ theme }) => theme.sizes.font12};
`;

export const H110 = styled.h1`
  ${defaultH1Option}
  font-size: ${({ theme }) => theme.sizes.font10};
`;

// h2 - sub title
const defaultH2Option = css`
  color: ${({ theme }) => theme.colors.MainGray};
`;

export const H230 = styled.h2`
  ${defaultH2Option}
  font-size: ${({ theme }) => theme.sizes.font30};
`;

export const H224 = styled.h2`
  ${defaultH2Option}
  font-size: ${({ theme }) => theme.sizes.font24};
`;

export const H222 = styled.h2`
  ${defaultH2Option}
  font-size: ${({ theme }) => theme.sizes.font22};
`;

export const H220 = styled.h2`
  ${defaultH2Option}
  font-size: ${({ theme }) => theme.sizes.font20};
`;

export const H218 = styled.h2`
  ${defaultH2Option}
  font-size: ${({ theme }) => theme.sizes.font18};
`;

export const H216 = styled.h2`
  ${defaultH2Option}
  font-size: ${({ theme }) => theme.sizes.font16};
`;

export const H214 = styled.h2`
  ${defaultH2Option}
  font-size: ${({ theme }) => theme.sizes.font14};
`;

export const H212 = styled.h2`
  ${defaultH2Option}
  font-size: ${({ theme }) => theme.sizes.font12};
`;

export const H210 = styled.h2`
  ${defaultH2Option}
  font-size: ${({ theme }) => theme.sizes.font10};
`;
