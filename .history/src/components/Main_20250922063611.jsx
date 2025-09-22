import { useState } from "react";
import Hero from "./main_components/Hero";
import SideBar from "./main_components/SideBar";
import Properties from "./main_components/Properties";
import DailyForecast from "./main_components/DailyForecast";

function Main({ weather, units }) {
  const [days, setDays] = useState("Saturday");
  const [isOpened, setIsOpened] = useState(false);

  const daysWithHours = {};
  if (weather?.hourly?.time) {
    weather.hourly.time.forEach((time, idx) => {
      const day = new Date(time).toLocaleDateString("en-US", {
        weekday: "long",
      });

      if (!daysWithHours[day]) daysWithHours[day] = [];

      daysWithHours[day].push({
        hour: (() => {
          const hourNum = parseInt(time.split("T")[1].slice(0, 2), 10);
          if (hourNum === 0) return "12 am";
          if (hourNum < 12) return `${hourNum} am`;
          if (hourNum === 12) return "12 pm";
          return `${hourNum - 12} pm`;
        })(),
        temperature: weather.hourly.temperature_2m?.[idx] ?? null,
        icon: getIcon(weather.hourly.weathercode?.[idx] ?? 0),
        humidity: weather.hourly.relativehumidity_2m?.[idx] ?? null,
        feelsLike: weather.hourly.apparent_temperature?.[idx] ?? null,
        precipitation: weather.hourly.precipitation?.[idx] ?? null,
        windSpeed: weather.hourly.windspeed_10m?.[idx] ?? null,
      });
    });
  }

  const hoursOfDay = daysWithHours[days] || [];
  console.log(hoursOfDay);

  function handleOpening() {
    setIsOpened(!isOpened);
  }

  function getIcon(code) {
    if (code === 0 || code === 1) return "/images/icon-sunny.webp";
    if (code === 2) return "/images/icon-partly-cloudy.webp";
    if (code === 3) return "/images/icon-overcast.webp";
    if ([45, 48].includes(code)) return "/images/icon-fog.webp";
    if ([51, 53, 55, 56, 57].includes(code)) return "/images/icon-drizzle.webp";
    if ([61, 63, 65, 66, 67, 80, 81, 82].includes(code))
      return "/images/icon-rain.webp";
    if ([71, 73, 75, 77, 85, 86].includes(code))
      return "/images/icon-snow.webp";
    if ([95, 96, 99].includes(code)) return "/images/icon-storm.webp";
    return "/images/icon-retry.svg";
  }
  const country = weather?.timezone ?? "";

  return (
    <main className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] grid-rows-[auto_auto_auto] lg:grid-rows-[300px_160px_230px] w-full mx-auto gap-3 pb-8 px-4 sm:px-0">
      {/* hero section */}
      <Hero
        country={country}
        weather={weather}
        getIcon={getIcon}
        units={units}
      />
      {/* Side bar */}
      <SideBar
        weather={weather}
        getIcon={getIcon}
        handleOpening={handleOpening}
        days={days}
        isOpened={isOpened}
        setDays={setDays}
        hoursOfDay={hoursOfDay}
        units={units}
      />
      <Properties hoursOfDay={hoursOfDay} days={days} units={units} />
      <DailyForecast weather={weather} getIcon={getIcon} units={units} />
    </main>
  );
}
export default Main;
