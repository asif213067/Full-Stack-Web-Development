import { useState } from "react";
import type { CountryType } from "../../type";
import "./Country.css";

export interface CountryProps {
  country: CountryType;
  handleVisitedCountries: (country: CountryType) => void;
  handleVisitedFlags: (flag: string) => void;
}

const Country = ({
  country,
  handleVisitedCountries,
  handleVisitedFlags,
}: CountryProps) => {
  const [visited, setVisited] = useState<boolean>(false);

  const handleVisited = () => {
    setVisited(!visited);
    handleVisitedCountries(country);
  };

  return (
    <div className={`country ${visited ? "country-visited" : ""}`}>
      <h3>{country.name.common}</h3>
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <p>Population:</p>
      <p>Capital:</p>
      <button onClick={handleVisited}>
        {visited ? "Visited" : "Mark as Visited"}
      </button>
      <button onClick={() => handleVisitedFlags(country.flags.flags.png)}>
        Add Flag as Visited
      </button>
    </div>
  );
};

export default Country;
