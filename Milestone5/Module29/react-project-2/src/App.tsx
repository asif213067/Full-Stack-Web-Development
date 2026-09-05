import { Suspense } from 'react';
import './App.css'
import type { CountryType } from './type'
import Countries from './components/Countries'

function App() {

  // create a function to fetch data from the API and return the data as a promise of type CountryType[]
  const countriesPromise = async (): Promise<CountryType[]> => {
    const response = await fetch('https://openapi.programming-hero.com/api/all');
    const data = await response.json();
    return data.countries;
  }

  return (
    <>
      <h2>World on the go....</h2>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Countries countriesPromise={countriesPromise()} />
      </Suspense>
    </>
  )
}

export default App
