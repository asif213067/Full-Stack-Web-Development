import { use } from "react";
import type { CountryType } from "../type"



interface CountriesProps {
  countriesPromise: Promise<CountryType[]>;
}

const Countries = ({countriesPromise}: CountriesProps) => {

  const countries = use(countriesPromise);
  console.log(countries);

  return (
    <div>
        <h2>Countries: {countries.length}</h2>
    </div>
  )
}

export default Countries