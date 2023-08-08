import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const Time = styled.div`
  font-family: ${p => p.theme.fonts.mainFont};
  align-self: start;
  color: #cfc6c6;
`;

export const Title = styled.h1`
  margin-top: ${p => p.theme.space[3]}px;
  margin-left: ${p => p.theme.space[5]}px;
  font-family: ${p => p.theme.fonts.monospace};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.l};
  color: ${p => p.theme.colors.text};
`;
export const Text = styled(Link)`
  margin: 4px 0;
  font-family: ${p => p.theme.fonts.mainFont};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.ml};
  color: ${p => p.theme.colors.muted};
  text-decoration: none;
  text-align: justify;
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
  margin: 0 auto;
  flex-direction: column;
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
    background-color: #555353;; /* Change to desired hover color */
  }
`;