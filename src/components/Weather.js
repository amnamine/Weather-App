import React, { useState } from "react";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const apiKey = "3809c22f869e1f92369d9811c1cbd93f"; // Replace with your OpenWeather API key

  const getWeather = async (e) => {
    e.preventDefault();
    setError(null);
    setWeatherData(null);
    if (!city) return;

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );

      if (!response.ok) {
        throw new Error("City not found");
      }

      const data = await response.json();
      setWeatherData(data);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-primary to-secondary text-white transition-all duration-500">
      <h1 className="text-6xl font-bold mb-4 drop-shadow-lg animate-bounce">Weather App</h1>
      <form onSubmit={getWeather} className="mb-6 flex space-x-4">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="p-4 rounded-lg text-black shadow-lg focus:outline-none focus:ring-2 focus:ring-accent transition duration-300"
        />
        <button
          type="submit"
          className="px-6 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-all duration-300"
        >
          Search
        </button>
      </form>
      {error && <p className="text-red-400 text-lg animate-pulse">{error}</p>}
      {weatherData && (
        <div className="text-center p-6 bg-opacity-50 bg-white rounded-lg shadow-lg transition-all duration-300">
          <h2 className="text-4xl font-semibold">{weatherData.name}</h2>
          <p className="text-2xl">{weatherData.weather[0].description}</p>
          <p className="text-5xl font-bold">{Math.round(weatherData.main.temp)}°C</p>
          <p className="text-lg">Humidity: {weatherData.main.humidity}%</p>
          <p className="text-lg">Wind Speed: {weatherData.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
