import 'styled-components';
import { Color, Typography } from './ds/theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: Color;
    typography: Typography;
  }
}
