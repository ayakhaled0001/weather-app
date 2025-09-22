import { useEffect, useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("Egypt");
  useEffect(() => {
    async function fetchData(city) {
      const currCity =
        await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}
`).then((r) => r.json());

      const { latitude, longitude, timezone } = currCity.results[0];
      const final = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m,apparent_temperature,relativehumidity_2m,windspeed_10m,precipitation,weathercode&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=${timezone}`
      );
      const data = await final.json();
      console.log(data);
      setWeather(data);
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
      <Main weather={weather} units={units} />
    </div>
  );
}

export default App;
