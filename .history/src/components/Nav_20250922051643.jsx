function Nav({ units, setUnits }) {
  return (
    <nav className="flex mx-28 justify-between py-6 ">
      <img src="/images/logo.svg" alt="logo" />
      <div className="flex items-center gap-2 p-2.5 bg-Neutral-700 rounded-md menu-open relative">
        <img src="/images/icon-units.svg" alt="units" className="w-6" />
        <span className="text-Neutral-0 text-xl">Units</span>
        <img src="/images/icon-dropdown.svg" alt="" />
        <div className="z-10 menu-hidden hidden w-56 bg-Neutral-700 absolute text-Neutral-0 top-[51px] p-2 right-0 rounded-md">
          <button
            className="w-full hover:bg-Neutral-600 p-1 rounded-md flex justify-between hover:cursor-pointer"
            onClick={() =>
              setUnits((prev) => ({ ...prev, imperial: !units.imperial }))
            }>
            Switch to Imperial
            {units.imperial && (
              <img src="/images/icon-checkmark.svg" alt="selected" />
            )}
          </button>
          <span className="text-Neutral-300 text-sm">Temperature</span>
          <button
            className="w-full hover:bg-Neutral-600 p-1 rounded-md flex justify-between hover:cursor-pointer"
            onClick={() =>
              setUnits((prev) => ({
                ...prev,
                celsius: !units.celsius,
                fahrenheit: !units.fahrenheit,
              }))
            }>
            Celsius (&deg;C)
            {units.celsius && (
              <img src="/images/icon-checkmark.svg" alt="selected" />
            )}
          </button>
          <button
            className=" w-full pb-1.5 hover:bg-Neutral-600 p-1 rounded-md flex justify-between hover:cursor-pointer"
            onClick={() =>
              setUnits((prev) => ({
                ...prev,
                fahrenheit: !units.fahrenheit,
                celsius: !units.celsius,
              }))
            }>
            Fahrenheit (&deg;F)
            {units.fahrenheit && (
              <img src="/images/icon-checkmark.svg" alt="selected" />
            )}
          </button>
          <span className="text-Neutral-300 text-sm mt-1 border-t border-[#d1d1d169] block">
            Wind Speed
          </span>
          <button
            className=" w-full hover:bg-Neutral-600 p-1 rounded-md flex justify-between hover:cursor-pointer"
            onClick={() =>
              setUnits((prev) => ({
                ...prev,
                mph: !units.mph,
                kmh: !units.kmh,
              }))
            }>
            Km/h
            {units.kmh && (
              <img src="/images/icon-checkmark.svg" alt="selected" />
            )}
          </button>
          <button
            className=" w-full pb-1.5 hover:bg-Neutral-600 p-1 rounded-md flex justify-between hover:cursor-pointer"
            onClick={() =>
              setUnits((prev) => ({
                ...prev,
                mph: !units.mph,
                kmh: !units.kmh,
              }))
            }>
            mph
            {units.mph && (
              <img src="/images/icon-checkmark.svg" alt="selected" />
            )}
          </button>
          <span className="text-Neutral-300 text-sm border-t border-[#d1d1d169] block">
            Precipitation
          </span>
          <button
            className="w-full hover:bg-Neutral-600 p-1 rounded-md flex justify-between hover:cursor-pointer"
            onClick={() =>
              setUnits((prev) => ({
                ...prev,
                inches: !units.inches,
                millimeters: !units.millimeters,
              }))
            }>
            Millimeters (mm)
            {units.millimeters && (
              <img src="/images/icon-checkmark.svg" alt="selected" />
            )}
          </button>
          <button
            className="w-full hover:bg-Neutral-600 p-1 rounded-md flex justify-between  hover:cursor-pointer"
            onClick={() =>
              setUnits((prev) => ({
                ...prev,
                inches: !units.inches,
                millimeters: !units.millimeters,
              }))
            }>
            Inches (in)
            {units.inches && (
              <img src="/images/icon-checkmark.svg" alt="selected" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
