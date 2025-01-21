import { createTheme, Theme } from "@mui/material/styles";

export enum Colors {
  PrimaryBlue = "#698AF4",
  PrimaryBlueHover = "#8aa4f6",
  PrimaryBlueActive = "#5177f2",
  SecondaryDarkBlue = "#192639",
  PrimaryGreen = "#7CC741",
  GradientPurple = "#9F8CF3",
  GradientBlue = "#7A95EB",
  LightBlue = "#3994D6",
  LightBlue200 = "#B0D4EF",
  PrimaryText = "#1C1C1C",
  PrimaryTextHover = "#727272",
  PrimaryTextActive = "#000000",
  PrimaryTextOpacity = "rgba(0, 0, 0, .7)",
  DisabledText = "rgb(25 38 57 / 50%)",
  WhiteText = "#ffffff",
  Yellow = "#F6B817",
  Red = "#E51A14",
  Red200 = "#FCE8E8",
  FieldGray = "#F6F7FA",
  FieldStroke = "#DDDEE7",
}

export const favoriteBarSize = 200;

export const favoriteMobileBarSize = 30;

export const inputHeight = 53;

export const modalSize: { xs: number; sm: number; md: number; lg: number } = {
  xs: 444,
  sm: 600,
  md: 900,
  lg: 1200,
};

// Here's what the theme object looks like with the default values:
// https://mui.com/material-ui/customization/default-theme/?expand-path=$.palette
const globalTheme: Theme = createTheme({
  shape: {
    borderRadius: 10,
  },
  breakpoints: {
    values: {
      xs: 560,
      sm: 768,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    common: {
      black: "#000000",
      white: "#ffffff",
    },
    primary: {
      main: Colors.PrimaryBlue,
    },
    secondary: {
      main: Colors.SecondaryDarkBlue,
    },
    success: {
      main: Colors.PrimaryGreen,
      contrastText: "#fff",
    },
    error: {
      main: Colors.Red,
    },
    warning: {
      main: Colors.Yellow,
    },
    info: {
      main: Colors.LightBlue,
    },
    text: {
      primary: Colors.PrimaryText,
      secondary: Colors.SecondaryDarkBlue,
      disabled: Colors.DisabledText,
    },
  },
  spacing: [0, 4, 8, 16, 24, 32, 46, 52],
  typography: {
    htmlFontSize: 12,
    fontFamily: "inherit",
    h1: {
      fontSize: "46px",
      fontWeight: 800,
      lineHeight: 1.5,
    },
    h2: {
      fontSize: "38px",
      fontWeight: 600,
      lineHeight: 1.5,
    },
    h3: {
      fontSize: "28px",
      fontWeight: 600,
      lineHeight: 1.5,
    },
    h4: {
      fontSize: "24px",
      fontWeight: 600,
      lineHeight: 1.5,
    },
    h5: {
      fontSize: "22px",
      fontWeight: 300,
      lineHeight: 1.5,
    },
    h6: {
      fontSize: "20px",
      fontWeight: 600,
      lineHeight: 1.5,
    },
    subtitle1: {
      fontSize: "16px",
      fontWeight: 300,
      lineHeight: 1.8,
    },
    subtitle2: {
      fontSize: "16px",
      fontWeight: 600,
      lineHeight: 1.8,
    },
    body1: {
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: 1.8,
    },
    body2: {
      fontSize: "14px",
      fontWeight: 600,
      lineHeight: 1.8,
    },
    button: {
      fontSize: "14px",
      fontWeight: 600,
      lineHeight: 1.5,
    },
    caption: {
      fontSize: "12px",
      fontWeight: 300,
      lineHeight: 1.8,
    },
    overline: undefined,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: "inherit",
          color: Colors.PrimaryText,
        },
      },
    },
  },
});

export default globalTheme;
