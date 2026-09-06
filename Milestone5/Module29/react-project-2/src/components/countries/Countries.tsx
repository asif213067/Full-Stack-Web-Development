import { use, useState } from "react";
import type { CountryType } from "../../type";
import Country from "../country/Country";
import "./Countries.css";

export interface CountriesProps {
  countriesPromise: Promise<CountryType[]>;
}

const Countries = ({ countriesPromise }: CountriesProps) => {
  const [visitedCountries, setVisitedCountries] = useState<CountryType[]>([]);
  const [visitedFlags, setVisitedFlags] = useState<string[]>([]);

  const countries = use(countriesPromise);

  const handleVisitedCountries = (country: CountryType): void => {
    const exist  = visitedCountries.find((c) => c.ccn3.ccn3 === country.ccn3.ccn3);

    if (exist) {
      let remainingCountries = visitedCountries.filter(
        (c) => c.ccn3.ccn3 !== country.ccn3.ccn3
      );
      setVisitedCountries(remainingCountries);
    } else {
      let updatedVisitedCountries: CountryType[] = [...visitedCountries, country];
      setVisitedCountries(updatedVisitedCountries);
    }
  };

  const handleVisitedFlags = (flag: string): void => {
    if (visitedFlags.includes(flag)) {
      let remainingFlag = visitedFlags.filter((f) => f !== flag);
      setVisitedFlags(remainingFlag);
    } else {
      let updatedVisitedFlags: string[] = [...visitedFlags, flag];
      setVisitedFlags(updatedVisitedFlags);
    }
  };

  return (
    <div>
      <h2>Countries: {countries.length}</h2>
      <h4>Visited Countries: {visitedCountries.length}</h4>
      <div className="visited_countries">
        {visitedCountries.map((country) => (
          <ul>
            <li key={country.ccn3.ccn3}>{country.name.common}</li>
          </ul>
        ))}
      </div>
      <h4>Visited Flags: {visitedFlags.length}</h4>
      <div className="visited_flags">
        {visitedFlags.map((flag) => (
          <img key={flag} src={flag} alt="visited flag" />
        ))}
      </div>
      <div className="countires">
        {countries
          .filter((country) => country.name.common !== "Israel")
          .map((country) => (
            <Country
              key={country.ccn3.ccn3}
              country={country}
              handleVisitedCountries={handleVisitedCountries}
              handleVisitedFlags={handleVisitedFlags}
            />
          ))}
      </div>
    </div>
  );
};

export default Countries;
