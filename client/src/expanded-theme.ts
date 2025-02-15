import { Palette, PaletteColor } from "@mui/material/styles/createPalette"; // eslint-disable-line

declare module "@mui/material/styles/createPalette" {
  interface PaletteColor {
    [keyof: number]: string;
  }

  interface Palette {
    tertiary: PaletteColor;
  }
}
