import { createTheme, darkColors, lightColors } from "@rneui/themed";

export const theme = createTheme({
  lightColors: lightColors,
  darkColors: darkColors,
  mode: "dark",
  components: {
    Text: {
      h1Style: {
        fontSize: 80,
      },
    },
  },
});
