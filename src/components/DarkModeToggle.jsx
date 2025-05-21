import React from "react";
import { Typography, Switch } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const DarkModeToggle = ({ darkMode, toggleDarkMode }) => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      {darkMode ? <DarkModeIcon /> : <LightModeIcon />}
      <Typography variant="h6" component="span">
        {darkMode ? "Dark Mode" : "Light Mode"}
      </Typography>
      <Switch checked={darkMode} onChange={toggleDarkMode} />
    </div>
  );
};

export default DarkModeToggle;
