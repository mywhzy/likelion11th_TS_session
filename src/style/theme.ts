import { css, DefaultTheme } from 'styled-components';

const color = {
  green: '#31F396',
  red: '#FF6868',
  gray1: '#51515C',
  gray2: '#AFAFBC',
  gray3: '#DEDEE8',
};

export type Color = typeof color;

const typography = {
  title1: css`
    font-size: 20px;
    font-weight: 700;
    line-height: 26px;
  `,
  body1: css`
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
  `,
};

export type Typography = typeof typography;

export const theme: DefaultTheme = {
  color,
  typography,
};
