import styled from 'styled-components';

export const Wrapper = styled.div`
  // margin-bottom: ${p => p.theme.space[2]}px;
  margin: 0 auto;
  margin-left: 35vw;
  margin-top: 40vh;
  font-family: ${p => p.theme.fonts.monospace};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.l};
  color: ${p => p.theme.colors.tomato};
`;