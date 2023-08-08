import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  @media (max-width: 576px) {
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Title = styled.h1`
  text-align: center;
  margin-top: ${p => p.theme.space[3]}px;
  font-family: ${p => p.theme.fonts.mainFont};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.l};
  color: ${p => p.theme.colors.spacy};
  @media (max-width: 576px) {
     font-size: ${p => p.theme.fontSizes.ml};
  }
`;
export const Time = styled.div`
  font-family: ${p => p.theme.fonts.mainFont};
  align-self: start;
  color: #cfc6c6;
  @media (max-width: 576px) {
    margin-bottom: 16px;
  }
`;

export const Content = styled(Link)`
  font-family: ${p => p.theme.fonts.mainFont};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.ml};
  color: ${p => p.theme.colors.muted};
  text-decoration: none;
  text-align: justify;
  @media (max-width: 576px) {
     font-size: ${p => p.theme.fontSizes.m};
  }
`;
export const OriginalSource = styled(Link)`
  font-family: ${p => p.theme.fonts.mainFont};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.ml};
  color: #3f82d7;
  @media (max-width: 576px) {
     font-size: ${p => p.theme.fontSizes.m};
  }
`;
export const Text = styled.div`
  font-family: ${p => p.theme.fonts.mainFont};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.ml};
  color: ${p => p.theme.colors.muted};
  @media (max-width: 576px) {
     font-size: ${p => p.theme.fontSizes.m};
  }
`;

export const ButtonBack = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  gap: 4px;
  width: 96px;
  border: 2px green;
  border-radius: 4px;
  padding: 6px;
  background-color: tomato;
  margin: 8px 0 16px 32px;
  text-decoration: none;
  font-family: ${p => p.theme.fonts.mainFont};
  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.white};
  @media (max-width: 576px) {
    margin: 0;
  }
`;
export const Image = styled.img`
  display: block;
  margin: 0 auto;
  border-radius: 4px;
  height: 200px;
  @media (max-width: 576px) {
    width: 100%;
  }
`;
export const WrapperHeader = styled.div`
 display: flex;
 justify-content: space-between;
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;