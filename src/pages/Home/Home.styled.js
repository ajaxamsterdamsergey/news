import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const CategoryContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    row-gap: 16px;
    justify-content: center;
    margin: 16px 0;
`;

export const LoadMoreButton = styled.button`
  margin-bottom:  ${p => p.theme.space[4]}px;
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[4]}px;
  font-family: ${p => p.theme.fonts.mainFont};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.s};
  color: ${p => p.theme.colors.spacy};
  background-color: ${p => p.theme.colors.white};
  border: 1px solid ${p => p.theme.colors.spacy};
  border-radius: ${p => p.theme.radii.sm};
  cursor: pointer;
  transition: background-color 0.3s ease;
  background-color: ${p => p.active ? p.theme.colors.spacy : p.theme.colors.white};
  color: ${p => p.active ? p.theme.colors.white : p.theme.colors.spacy};

  &:hover {
    background-color: ${p => p.theme.colors.spacy};
    color: ${p => p.theme.colors.white};
  }
`;
export const CategoryButton = styled.button`
  margin: 0 ${p => p.theme.space[1]}px;
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[4]}px;
  font-family: ${p => p.theme.fonts.mainFont};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.s};
  color: ${p => p.theme.colors.spacy};
  background-color: ${p => p.theme.colors.white};
  border: 1px solid ${p => p.theme.colors.spacy};
  border-radius: ${p => p.theme.radii.sm};
  cursor: pointer;
  transition: background-color 0.3s ease;
  background-color: ${p => p.active ? p.theme.colors.spacy : p.theme.colors.white};
  color: ${p => p.active ? p.theme.colors.white : p.theme.colors.spacy};

  &:hover {
    background-color: ${p => p.theme.colors.spacy};
    color: ${p => p.theme.colors.white};
  }
  &.active {
    background-color: ${p => p.theme.colors.spacy};
    color: ${p => p.theme.colors.white};
  }
  @media (max-width: 768px) {
    font-size: ${p => p.theme.fontSizes.xs};
    padding: ${p => p.theme.space[3]}px ${p => p.theme.space[3]}px;
  }
`;


export const Title = styled.h1`
  text-align: center;
  margin: ${p => p.theme.space[3]}px 0;
  font-family: ${p => p.theme.fonts.mainFont};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.l};
  color: ${p => p.theme.colors.spacy};
`;
export const Time = styled.div`
  font-family: ${p => p.theme.fonts.mainFont};
  align-self: start;
  color: #cfc6c6;
`;
   
export const Text = styled(Link)`
  margin: 4px 0;
  max-width: 100%;
  font-family: ${p => p.theme.fonts.mainFont};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.ml};
  color: ${p => p.theme.colors.muted};
  text-decoration: none;
  text-align: justify;
  word-wrap: break-word;
  @media (max-width: 576px) {
    font-weight: ${p => p.theme.fontWeights.normal};
    font-size: ${p => p.theme.fontSizes.m};
  }
`;
export const List = styled.ul`
  margin-top: ${p => p.theme.space[5]}px;
  display: flex;
  list-style: none;
  margin: ${p => p.theme.space[0]}px;
  padding: ${p => p.theme.space[0]}px;
  margin: 0 auto 16px;
  flex-direction: column;
  @media (max-width: 576px) {
    max-width: 100%;
  }
`;

export const Item = styled.li`
  transition: background-color 0.7s ease;
  border-bottom: solid 2px #796c6c;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: ${p => p.theme.space[1]}px;
  padding: ${p => p.theme.space[3]}px;
  color: ${p => p.theme.colors.muted};
  &:hover {
    border-radius:${p => p.theme.radii.sm};;
    transform: scale(1.01); 
    background-color: #555353;
  }
`;
