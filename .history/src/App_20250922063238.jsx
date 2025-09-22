import { useEffect, useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Main from "./components/Main";
import LoadingState from "./components/LoadingState";

function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("Egypt");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData(city) {
      try {
        setLoading(true);

        const currCity = await fetch(
          `https://geocoding-api.open-meteo.com/v1/search?name=${city}`
        ).then((r) => r.json());

        if (!currCity.results || currCity.results.length === 0) {
          throw new Error("Location not found");
        }

        const { latitude, longitude, timezone } = currCity.results[0];
        const final = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m,apparent_temperature,relativehumidity_2m,windspeed_10m,precipitation,weathercode&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=${timezone}`
        );

        const data = await final.json();
        console.log(data);
        setWeather(data);
      } catch (err) {
        console.error("Error fetching weather data:", err);
        // You can add error handling here later
      } finally {
        setLoading(false);
      }
    }
    fetchData(city);
  }, [city]);

  const [units, setUnits] = useState({
    imperial: false,
    celsius: true,
    fahrenheit: false,
    kmh: true,
    mph: false,
    millimeters: true,
    inches: false,
  });

  return (
    <div className="bg-Neutral-900">
      <Nav units={units} setUnits={setUnits} />
      <Header city={city} setCity={setCity} />

      {loading && <LoadingState />}
      {!loading && weather && <Main weather={weather} units={units} />}
    </div>
  );
}

export default App;
