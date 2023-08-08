import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const NavContainer = styled.nav`
  display: flex;
 @media (max-width: 576px) {
    justify-content: center;
    gap: 16px;
  }
  
`;

export const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: ${p => p.theme.space[3]}px;
  padding: ${p => p.theme.space[3]}px;
  margin-left: ${p => p.theme.space[4]}px;
  border-radius: 4px;
  text-decoration: none;
  color: ${p => p.theme.colors.text};
  font-family: ${p => p.theme.fonts.mainFont};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.ml};
  color: ${p => p.theme.colors.tomato};
  border: solid 2px #9b9797;
  &.active {
    background-color: ${p => p.theme.colors.antracit};
    color: ${p => p.theme.colors.white};
    border: none;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.primary};
  }
  @media (max-width: 576px) {
    margin: 0;
  }
`;