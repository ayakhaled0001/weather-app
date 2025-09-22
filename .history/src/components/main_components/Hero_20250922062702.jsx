import { toF } from "../Utilites";

function Hero({ country, weather, getIcon, units }) {
  const input = weather?.current_weather?.time;
  const date = new Date(input);

  const displayTemperature = () => {
    const temp = weather?.current_weather?.temperature;
    if (!temp) return "--";

    if (units.fahrenheit) {
      return Math.round(toF(temp));
    }
    return Math.round(temp);
  };

  return (
    <section className="p-4 sm:p-6 lg:p-10 items-center bg-contain flex flex-col sm:flex-row justify-between col-span-1 row-span-1 min-h-[200px] sm:h-80 bg-[url(/images/bg-today-small.svg)] sm:bg-[url(/images/bg-today-large.svg)] bg-no-repeat bg-cover lg:bg-contain">
      <div className="font-dm mb-4 sm:mb-0">
        <h2 className="text-Neutral-0 text-xl sm:text-2xl lg:text-3xl font-semibold">
          {country.split("/").reverse().join(" , ")}
        </h2>
        <p className="text-Neutral-0 font-light text-sm sm:text-base">
          {date.toLocaleDateString("en-US", {
            weekday: "long", // e.g. Tuesday
            month: "short", // e.g. Aug
            day: "numeric", // e.g. 5
            year: "numeric", // e.g. 2025
          })}
        </p>
      </div>
      <div className="flex items-center justify-center sm:justify-end">
        <img
          src={getIcon(weather?.current_weather?.weathercode)}
          alt="weather icon"
          className="w-20 sm:w-32 lg:w-40 inline-block"
        />
        <span className="font-brico italic text-4xl sm:text-5xl lg:text-7xl text-Neutral-0">
          {displayTemperature()}&deg;{units.fahrenheit ? "F" : "C"}
        </span>
      </div>
    </section>
  );
}

export default Hero;
