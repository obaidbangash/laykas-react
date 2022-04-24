import { red, amber, grey } from "@material-ui/core/colors";
import { createTheme, responsiveFontSizes } from "@material-ui/core/styles";

const lightMuiTheme = createTheme({
  type: "light",
  palette: {
    primary: {
      main: "#FFF"
    },
    secondary: {
      main: amber[500],
      light: "#feefc3"
    },
    error: {
      main: red.A400
    },
    background: {
      default: "#FFF",
      highlight: "#F1F3F4"
    }
  },
  shape: {
    borderRadius: "0.5rem"
  },
  zIndex: {
    appBar: 1200,
    drawer: 1100
  },
  mixins: {
    drawer: {
      minWidth: 280
    }
  },

  custom: {
    palette: {
      iconColor: "#5f6368",
      itemBorderColor: "#DDDDDD",
      iconHighlight: grey[900],
      notesCheckbox: grey[700],
      profilePopColor: "#FFF",
      noteBackground: {
        default: "#fff",
        red: "#F28B82",
        orange: "#FBBC04",
        yellow: "#FFF475",
        green: "#CCFF90",
        cyan: "#A7FFEB",
        lightblue: "#CBF0F8",
        darkblue: "#AECBFA",
        purple: "#D7AEFB",
        pink: "#FDCFE8",
        brown: "#E6C9A8",
        grey: "#E8EAED"
      },
      noteColorCheck: "#0007",
      labelBackground: "#0002"
    }
  }
});


export const light = responsiveFontSizes(lightMuiTheme);
