import styled from 'styled-components';
import {
  shadow,
  textAlign,
  color,
  space,
  layout,
  flexbox,
  grid,
  background,
  border,
  position,
  compose
} from 'styled-system';

const styledSystemProps = compose(
  shadow,
  textAlign,
  color,
  space,
  layout,
  flexbox,
  grid,
  background,
  border,
  position
);

export const Box = styled.div(
  (props) => {
    const newProps = Object.keys(props).reduce((acc, key) => {
      if (key.startsWith('$')) {
        acc[key.slice(1)] = props[key];
      } else {
        acc[key] = props[key];
      }
      return acc;
    }, {});
    return styledSystemProps(newProps);
  }
);
