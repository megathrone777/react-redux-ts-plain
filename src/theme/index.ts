import * as styledComponents from "styled-components";

import { colors, TColors } from "./variables/colors";
import { fonts, TFonts } from "./variables/fonts";

interface ThemeInterface {
  colors: TColors;
  fonts: TFonts;
  rem: (px: number) => string;
}

const {
  ThemeProvider,
  createGlobalStyle,
  default: styled,
  css,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<ThemeInterface>;

const theme: ThemeInterface = {
  colors,
  fonts,
  rem: (px) => {
    const baseFontSize = fonts.initialFontSize;
    return `${px / baseFontSize}rem`;
  },
};

export { styled, theme, ThemeProvider, css, createGlobalStyle };
