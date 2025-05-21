import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  CircularProgress,
  TextField,
  Button,
  Stack,
} from "@mui/material";

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState("Toronto");
  const [error, setError] = useState("");

  const fetchWeather = async (cityName) => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
      );
      setWeather(response.data);
    } catch (err) {
      setError("City not found. Please try again.");
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather(inputValue);
  }, []);

  const handleSearch = () => {
    if (inputValue.trim() !== "") {
      fetchWeather(inputValue.trim());
    }
  };

  return (
    <Stack
      spacing={1}
      alignItems="center"
      justifyContent="center"
      sx={{ mt: 4, width: "100%" }}
    >
      <Stack direction="row" spacing={2}>
        <TextField
          label="Enter City"
          variant="outlined"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button variant="contained" onClick={handleSearch}>
          Search
        </Button>
      </Stack>

      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Typography color="error">{error}</Typography>
      ) : weather ? (
        <Card sx={{ width: 400, borderRadius: 3, p: 2 }}>
          <CardContent>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
              {weather.name}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {weather.weather[0].description}, {weather.main.temp}°C
            </Typography>
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt="weather icon"
              style={{ width: "80px", height: "80px" }}
            />
            <Typography variant="body2" sx={{ mt: 1 }}>
              Humidity: {weather.main.humidity}% <br />
              Wind: {weather.wind.speed} m/s <br />
              Feels Like: {weather.main.feels_like}°C <br />
              Min Temp: {weather.main.temp_min}°C <br />
              Max Temp: {weather.main.temp_max}°C <br />
              Pressure: {weather.main.pressure} hPa <br />
              Visibility: {weather.visibility / 1000} km <br />
              Country: {weather.sys.country}
            </Typography>
          </CardContent>
        </Card>
      ) : null}
    </Stack>
  );
};

export default Weather;
