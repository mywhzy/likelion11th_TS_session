import 'styled-components';
import { Color, Typography } from './style/theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: Color;
    typography: Typography;
  }
}
