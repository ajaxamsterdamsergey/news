import styled from 'styled-components';
import { Field, Form } from 'formik';

export const Input = styled(Field)`
  display: inline-block;
  color: #fff;
  background-color: #676262!important;
  width: 100%;
  font: inherit;
  font-size: ${p => p.theme.fontSizes.ml};
  border: ${p => p.theme.borders.none};
  outline: none;
  padding-left: ${p => p.theme.space[3]}px;
  padding-right: ${p => p.theme.space[3]}px;
  &::placeholder {
    font: inherit;
    font-size: ${p => p.theme.fontSizes.m};
  }&:-internal-autofill-selected {
    background-color: #676262!important;
  }
`;
export const Header = styled.div`
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  margin: 16px 32px;
  color: #fff;
  width: 320px;
  background-color: #565353;
  border-radius: 4px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    @media (max-width: 576px) {
    margin: 16px 0;
  }

`;
export const SearchForm = styled(Form)`
  display: flex;
  align-items: center;
  width: 100%;
  color: #fff;
  max-width: 600px;
  background-color: #676262;
  border-radius: ${p => p.theme.radii.sm};
  overflow: hidden;
`;
export const Button = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: ${p => p.theme.borders.none};
  opacity: 0.6;
  background-color: #5d5959;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 1;
  }
`;