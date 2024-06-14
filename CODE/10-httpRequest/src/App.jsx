import { useRef, useState, useCallback,useEffect } from 'react';
import Places from './components/Places.jsx';
import Modal from './components/Modal.jsx';
import DeleteConfirmation from './components/DeleteConfirmation.jsx';
import logoImg from './assets/logo.png';
import {sortPlacesByDistance} from './loc.js'
import AvailablePlaces from './components/AvailablePlaces.jsx';
import {fetchAvailablePlaces, fetchUserPlaces, updateUserPlaces } from './http.js';
import Error from './components/Error.jsx';
import {useFetch} from './components/useFetch.jsx'

async function fetchSortedData(){
  const places = await fetchUserPlaces();
  return new Promise((resolve,reject)=>{
    navigator.geolocation.getCurrentPosition(position=>{
      const sortedPlaces=sortPlacesByDistance(
        places,
        position.coords.latitude,
        position.coords.longitude
      )
      resolve(sortedPlaces)
  });
});
}

function App() {
  const selectedPlace = useRef();
  const [errorUpdatingPlaces, setErrorUpdatingPlaces] = useState();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const {isloading,fetchData:userPlaces,setFetchData:setUserPlaces,error} = useFetch(fetchSortedData,[])

  function handleStartRemovePlace(place) {
    setModalIsOpen(true);
    selectedPlace.current = place;
  }

  function handleStopRemovePlace() {
    setModalIsOpen(false);
  }

  async function handleSelectPlace(selectedPlace) {

    setUserPlaces((prevPickedPlaces) => {
      if (!prevPickedPlaces) prevPickedPlaces = [];
      if (prevPickedPlaces.some((place) => place.id === selectedPlace.id)) return prevPickedPlaces;
      return [selectedPlace, ...prevPickedPlaces];
    });

    try {
      await updateUserPlaces([selectedPlace,...userPlaces]);
    } catch (error) {
      setUserPlaces(userPlaces);
      setErrorUpdatingPlaces({message: error.message || 'Failed to update places.',});
    }
  }

  const handleRemovePlace = useCallback(async function handleRemovePlace() {
    setUserPlaces((prevPickedPlaces) => prevPickedPlaces.filter((place) => place.id !== selectedPlace.current.id));
    
    try {
      await updateUserPlaces(userPlaces.filter((place) => place.id !== selectedPlace.current.id));
    } catch (error) {
      setUserPlaces(userPlaces);
      setErrorUpdatingPlaces({message: error.message || 'Failed to update places.',});
    }
    setModalIsOpen(false);
  }, [userPlaces]);

  function handleError() {
    setErrorUpdatingPlaces(null);
  }

  return (
    <>
      <Modal open={errorUpdatingPlaces} onClose={handleError}>
        {errorUpdatingPlaces &&  <Error title="An error occurred!"  message={errorUpdatingPlaces.message} onConfirm={handleError}/>}
      </Modal>

      <Modal open={modalIsOpen} onClose={handleStopRemovePlace}>
        <DeleteConfirmation onCancel={handleStopRemovePlace} onConfirm={handleRemovePlace}/>
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>Create your personal collection of places you would like to visit or you have visited.</p>
      </header>
      <main>
        {error && <Error title="an error ocuured" message={error.message}/>}
        {!error && <Places 
          title="I'd like to visit ..." fallbackText="Select the places you would like to visit below."
          isloading={isloading} loadingText="fetching user places"
          places={userPlaces} onSelectPlace={handleStartRemovePlace}
        />}
        <AvailablePlaces onSelectPlace={handleSelectPlace} 
        />
      </main>
    </>
  );
}

export default App;
