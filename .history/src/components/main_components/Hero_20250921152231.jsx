function Hero({ country, weather, getIcon }) {
  const input = weather?.current_weather?.time;
  const date = new Date(input);
  return (
    <section className="p-10 items-center bg-contain flex justify-between col-span-1 row-span-1 h-80 bg-[url(/images/bg-today-large.svg)] bg-no-repeat  h-80">
      <div className="font-dm">
        <h2 className="text-Neutral-0 text-3xl font-semibold ">
          {country.split("/").reverse().join(" , ")}
        </h2>
        <p className="text-Neutral-0 font-light">
          {date.toLocaleDateString("en-US", {
            weekday: "long", // e.g. Tuesday
            month: "short", // e.g. Aug
            day: "numeric", // e.g. 5
            year: "numeric", // e.g. 2025
          })}
        </p>
      </div>
      <span className="font-brico italic text-7xl text-Neutral-0">
        <img
          src={getIcon(weather?.current_weather?.weathercode)}
          alt="weather icon"
          className="w-40 inline-block"
        />
        {weather?.current_weather?.temperature ?? "--"}&deg;
      </span>
    </section>
  );
}

export default Hero;
