function SideBar({ hoursOfDay, handleOpening, days, isOpened, setDays }) {
  const weekDays = [
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
  ];

  // Pull only the chosen day's hours

  return (
    <aside className="col-span-1 row-span-4 h-[690px] rounded-2xl bg-Neutral-700 p-6">
      {/* upper aside */}
      <div className="flex justify-between">
        <h3 className="text-Neutral-0 text-2xl">Hourly forcast</h3>
        <div
          className="relative rounded-md p-2 bg-Neutral-600 flex items-center gap-1.5 text-Neutral-0 text-lg"
          onClick={(e) => handleOpening(e)}>
          {days} <img src="/images/icon-dropdown.svg" alt="dropdown" />
          {isOpened && (
            <div className="absolute bg-Neutral-600 text-Neutral-0 text-lg top-10 w-full left-0 ">
              {weekDays.map((i, index) => (
                <p
                  key={index}
                  onClick={() => setDays(i)}
                  className="border-t-[1px] border-b-[1px] border-Neutral-300 text-center p-1">
                  {i}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
      {/* hours */}
      <article className="my-2 h-[580px] overflow-y-scroll">
        {hoursOfDay.map((hour, index) => (
          <div
            key={index}
            className="my-2 rounded-md pe-4 bg-Neutral-600 text-Neutral-0 flex justify-between items-center">
            <div className="flex items-center">
              <img src={hour.icon} alt="" className="w-14" />
              {hour.hour}
            </div>
            <span> {hour.temperature}&deg;</span>
          </div>
        ))}
      </article>
    </aside>
  );
}

export default SideBar;
