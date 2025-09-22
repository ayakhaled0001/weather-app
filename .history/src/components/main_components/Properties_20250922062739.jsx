import { kmhToMph, mmToIn, toF } from "../Utilites";

function Properties({ hoursOfDay, units }) {
  if (!hoursOfDay || hoursOfDay.length === 0) {
    return <section>Loading…</section>;
  }
  const now = new Date();
  const currentHour =
    hoursOfDay?.find((h) => {
      // convert "1 am" / "2 pm" back to 24-hour for matching
      const hourNum = (() => {
        const [num, meridian] = h.hour.split(" ");
        let n = parseInt(num, 10);
        if (meridian === "pm" && n !== 12) n += 12;
        if (meridian === "am" && n === 12) n = 0;
        return n;
      })();
      return hourNum === now.getHours();
    }) || hoursOfDay[0];

  const convertTemperature = (temp) => {
    if (units.fahrenheit) {
      return Math.round(toF(temp));
    }
    return Math.round(temp);
  };

  const data = [
    {
      id: 0,
      header: "Feels like",
      content: `${convertTemperature(currentHour.feelsLike ?? 0)}°${
        units.fahrenheit ? "F" : "C"
      }`,
    },
    {
      id: 1,
      header: "humidity",
      content: `${currentHour.humidity ?? "N/A"}%`,
    },
    {
      id: 2,
      header: "Wind",
      content: `${
        units.mph
          ? Math.round(kmhToMph(currentHour.windSpeed ?? 0))
          : Math.round(currentHour.windSpeed ?? 0)
      }${units.mph ? "mph" : "km/h"}`,
    },
    {
      id: 3,
      header: "Precipitation",
      content: `${
        units.inches
          ? Math.round(mmToIn(currentHour.precipitation ?? 0) * 100) / 100
          : Math.round(currentHour.precipitation ?? 0)
      }${units.inches ? "in" : "mm"}`,
    },
  ];
  console.log(data);
  return (
    <section className="row-span-1 flex gap-6 my-3">
      {data.map((item, index) => (
        <div key={index} className="bg-Neutral-700 w-1/4 rounded-md p-4">
          <p className="text-Neutral-0 text-lg mb-3"> {item.header ?? "n/a"}</p>
          <p className="text-Neutral-0 text-3xl">{item.content ?? "n/a"}</p>
        </div>
      ))}
    </section>
  );
}

export default Properties;
