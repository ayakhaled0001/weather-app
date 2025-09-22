import { toF } from "../Utilites";

function SideBar({
  hoursOfDay,
  handleOpening,
  days,
  isOpened,
  setDays,
  units,
}) {
  const weekDays = [
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
  ];

  const convertTemperature = (temp) => {
    if (units.fahrenheit) {
      return Math.round(toF(temp));
    }
    return Math.round(temp);
  };

  return (
    <aside className="col-span-1 row-span-1 lg:row-span-4 h-auto lg:h-[690px] rounded-2xl bg-Neutral-700 p-4 sm:p-6">
      {/* upper aside */}
      <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-0">
        <h3 className="text-Neutral-0 text-xl sm:text-2xl">Hourly forcast</h3>
        <div className="relative rounded-md p-2 bg-Neutral-600 flex items-center gap-1.5 text-Neutral-0 text-base sm:text-lg w-full sm:w-auto">
          <span className="flex-1 sm:flex-none">{days}</span>
          <img
            src="/images/icon-dropdown.svg"
            alt="dropdown"
            className="cursor-pointer"
            onClick={handleOpening}
          />
          {isOpened && (
            <div className="absolute bg-Neutral-600 text-Neutral-0 text-base sm:text-lg top-10 w-full left-0 rounded-md shadow-lg z-20">
              {weekDays.map((i, index) => (
                <p
                  key={index}
                  onClick={() => setDays(i)}
                  className="border-t-[1px] border-b-[1px] border-Neutral-300 text-center p-2 hover:bg-Neutral-500 cursor-pointer">
                  {i}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
      {/* hours */}
      <article className="my-2 h-[300px] sm:h-[400px] lg:h-[580px] overflow-y-scroll">
        {hoursOfDay.map((hour, index) => (
          <div
            key={index}
            className="my-2 rounded-md pe-4 bg-Neutral-600 text-Neutral-0 flex justify-between items-center p-3">
            <div className="flex items-center gap-3">
              <img src={hour.icon} alt="" className="w-10 sm:w-12 lg:w-14" />
              <span className="text-sm sm:text-base">{hour.hour}</span>
            </div>
            <span className="text-sm sm:text-base">
              {" "}
              {convertTemperature(hour.temperature)}&deg;
              {units.fahrenheit ? "F" : "C"}
            </span>
          </div>
        ))}
      </article>
    </aside>
  );
}

export default SideBar;
