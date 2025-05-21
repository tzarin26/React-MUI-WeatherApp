import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Stack } from "@mui/material";
import DarkModeToggle from "./components/DarkModeToggle";
import Weather from "./components/weather";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: "#90caf9",
      },
      secondary: {
        main: "#131052",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "background.default",
        }}
      >
        <Stack spacing={1} alignItems="center" justifyContent="center">
          <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <Weather />
        </Stack>
      </Box>
    </ThemeProvider>
  );
}
