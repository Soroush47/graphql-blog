import { createTheme } from "@mui/material";

const theme = createTheme({
    typography: {
        fontFamily: `"YekanBakh", "Roboto", "Arial"`,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,
        fontSizeHeavy: 800,
        fontSizeFat: 900,
    },
    direction: "rtl",
    palette: {
        primary: {
            main: "#278ebf",
        },
    },
});

export default theme;
