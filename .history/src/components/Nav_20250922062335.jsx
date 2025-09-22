import { useState } from "react";

function Nav({ units, setUnits }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const switchToImperial = () => {
    setUnits({
      imperial: true,
      celsius: false,
      fahrenheit: true,
      kmh: false,
      mph: true,
      millimeters: false,
      inches: true,
    });
  };

  const switchToMetric = () => {
    setUnits({
      imperial: false,
      celsius: true,
      fahrenheit: false,
      kmh: true,
      mph: false,
      millimeters: true,
      inches: false,
    });
  };

  return (
    <nav className="flex flex-col sm:flex-row mx-4 sm:mx-8 lg:mx-28 justify-between py-4 sm:py-6 gap-4 sm:gap-0">
      <img src="/images/logo.svg" alt="logo" className="w-32 sm:w-auto" />
      <div
        onClick={toggleMenu}
        className="flex items-center gap-2 p-2.5 bg-Neutral-700 rounded-md menu-open relative w-full sm:w-auto">
        <img src="/images/icon-units.svg" alt="units" className="w-6" />
        <span className="text-Neutral-0 text-lg sm:text-xl">Units</span>
        <img
          src="/images/icon-dropdown.svg"
          alt=""
          className="cursor-pointer ml-auto sm:ml-0"
        />
        <div
          className={`z-10 w-full sm:w-56 bg-Neutral-700 absolute text-Neutral-0 top-[51px] left-0 sm:right-0 p-2 rounded-md ${
            isMenuOpen ? "block" : "hidden"
          }`}>
          <button
            className="w-full hover:bg-Neutral-600 p-1 rounded-md flex justify-between hover:cursor-pointer"
            onClick={switchToImperial}>
            Switch to Imperial
            {units.imperial && (
              <img src="/images/icon-checkmark.svg" alt="selected" />
            )}
          </button>
          <button
            className="w-full hover:bg-Neutral-600 p-1 rounded-md flex justify-between hover:cursor-pointer"
            onClick={switchToMetric}>
            Switch to Metric
            {!units.imperial && (
              <img src="/images/icon-checkmark.svg" alt="selected" />
            )}
          </button>
          <span className="text-Neutral-300 text-sm mt-2 border-t border-[#d1d1d169] block">
            Temperature
          </span>
          <button
            className="w-full hover:bg-Neutral-600 p-1 rounded-md flex justify-between hover:cursor-pointer"
            onClick={() =>
              setUnits((prev) => ({
                ...prev,
                celsius: true,
                fahrenheit: false,
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
                fahrenheit: true,
                celsius: false,
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
                kmh: true,
                mph: false,
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
                mph: true,
                kmh: false,
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
                millimeters: true,
                inches: false,
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
                inches: true,
                millimeters: false,
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
