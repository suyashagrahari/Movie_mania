import React, { useState, useEffect, useContext } from 'react';
import { SearchContext } from '../Context/Search';

const Country = () => {
  const [countries, setCountries] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectCountry, setSelectCountry] = useState("");
  
  const SearchData = useContext(SearchContext);

console.log(SearchData)
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => {
        // Sort countries alphabetically by common name
        const sortedCountries = data.sort((a, b) => {
          const countryA = a.name.common.toLowerCase();
          const countryB = b.name.common.toLowerCase();
          return countryA.localeCompare(countryB);
        });
        setCountries(sortedCountries);
      })
      .catch(error => console.error('Error fetching countries:', error));
  }, []); // <-- Fetch countries only once on component mount

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleCountrySelection = (countryName) => {
    setSelectCountry(countryName);
    SearchData.setCountry(countryName);
    setIsOpen(false); // Close dropdown after selection
  };

  return (
    <div className="relative inline-block text-left">
      <button onClick={toggleDropdown} className="group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-rose-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4 origin-left hover:decoration-2 hover:text-rose-300 relative bg-neutral-800 h-12 w-[16rem] border text-left p-3 text-gray-50 text-base font-bold rounded-lg overflow-hidden before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg after:absolute after:z-10 after:w-20 after:h-20 after:content[''] after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg flex items-center" aria-haspopup="true" aria-expanded={isOpen}>
        Select Country
      </button>
      {isOpen && (
        <div className="absolute mt-2 w-[16rem] rounded-md shadow-lg bg-white z-10 overflow-y-auto max-h-60">
          <ul className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
          {countries.map(country => (
            <button className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" key={country.cca3} onClick={() => handleCountrySelection(country.name.common)}>
              {country.name.common}
            </button>
          ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Country;
