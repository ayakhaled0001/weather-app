import { useState } from "react";

function Header({ setCity }) {
  const [searchedCity, setSearchedCity] = useState("");
  const handleSetSearchCity = () => setCity(searchedCity);
  return (
    <header className="px-4 sm:px-0">
      <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl text-Neutral-0 font-brico font-bold my-4 sm:my-6">
        How's the sky looking today?
      </h1>
      <div className="flex flex-col sm:flex-row justify-center gap-3 mb-6 sm:mb-10">
        <div className="bg-Neutral-700 w-full sm:w-2/5 rounded-lg flex ps-4 pe-12 py-3 gap-3">
          <img src="/images/icon-search.svg" alt="" />
          <input
            type="text"
            value={searchedCity}
            onChange={(e) => setSearchedCity(e.target.value)}
            className="text-Neutral-0 border-none outline-none placeholder:text-Neutral-0 placeholder:text-lg sm:placeholder:text-xl w-full"
            placeholder="Search for a place ..."
          />
        </div>
        <button
          onClick={handleSetSearchCity}
          className="hover:cursor-pointer text-Neutral-0 bg-Blue-500 px-6 py-3 rounded-md hover:bg-Blue-700 transition-all w-full sm:w-auto">
          Search
        </button>
      </div>
    </header>
  );
}

export default Header;
