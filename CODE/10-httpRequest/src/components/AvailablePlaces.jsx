import { useState, useEffect } from 'react';
import Places from './Places.jsx';
import Error from './Error.jsx';
import {sortPlacesByDistance} from '../loc.js'
import { fetchAvailablePlaces } from '../http.js';
import {useFetch} from './useFetch.jsx'

export default function AvailablePlaces({ onSelectPlace }) {

  const {isloading,fetchData:availablePlaces,error} = useFetch(fetchAvailablePlaces ,[])
  
  if (error){
    return <Error title="An error Ocuured" message={error.message}/>
  }

  return (
    <Places title="Available Places" places={availablePlaces} loadingText="fetching data..." isloading={isloading}
      fallbackText="No places available." onSelectPlace={onSelectPlace}/>
  );
}
