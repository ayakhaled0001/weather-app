import { toF } from "../Utilites";

function DailyForecast({ weather, getIcon, units }) {
  const data = weather?.daily?.time
    ? weather.daily.time.map((item, index) => ({
        day: new Date(weather.daily.time[index]).toLocaleDateString("en-US", {
          weekday: "long",
        }),
        icon: getIcon(weather.hourly.weathercode?.[index] ?? 0),
        max_temp: units.fahrenheit
          ? Math.round(toF(weather.daily.temperature_2m_max[index]))
          : Math.round(weather.daily.temperature_2m_max[index]),
        min_temp: units.fahrenheit
          ? Math.round(toF(weather.daily.temperature_2m_min[index]))
          : Math.round(weather.daily.temperature_2m_min[index]),
      }))
    : [];

  console.log(data);
  return (
    <section>
      <h1 className="text-Neutral-0 text-lg mb-3">Daily Forecast</h1>
      <div className="flex gap-3">
        {data.map((item, idx) => (
          <div
            key={idx}
            className="bg-Neutral-700 w-1/4 rounded-md p-3 flex flex-col items-center">
            <p className="text-Neutral-0">{item.day}</p>
            <img src={item.icon} alt="weather icon" />
            <div className=" w-full flex justify-between text-Neutral-0">
              <span>{item.max_temp}</span>
              <span>{item.min_temp}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default DailyForecast;
