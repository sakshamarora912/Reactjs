import { useRef, useState, useEffect } from 'react';
import logoImg from './assets/logo.png';
import { sortPlacesByDistance } from './loc';
import { AVAILABLE_PLACES } from './data';
import Places from './Components/Places';
import Modal from './Components/Modal';
import DeleteConfirmation from './Components/DeleteConfirmation';

function App() {
  const selectPlaces = useRef();
  const [availablesPlaces, setAvailablePlaces] = useState(AVAILABLE_PLACES);
  const [userPlaces, setUserPlaces] = useState([]);
  const [userPosition, setUserPosition] = useState(null);
  const [modelIsOpen, setModalIsOpen] = useState(false);

  useEffect(()=>{
    const localData=JSON.parse(localStorage.getItem('selectedPlaces')) || []
    const storedPlaces = localData.map(id=>availablesPlaces.find(place=>place.id===id))
    setUserPlaces(storedPlaces)
  },[availablesPlaces])

  useEffect(() => { 
    fetch('http://localhost:3000/places')
      .then(response => {
        if (!response.ok) 
          throw new Error('Failed to fetch places'); 
        return response.json();
      })
      .then(resData => setAvailablePlaces(resData.places))
      .catch(error => {
        console.error('Error fetching places:', error);
        setAvailablePlaces(AVAILABLE_PLACES);
      });
  }, []);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(pos => setUserPosition(pos.coords));
  }, []);

  function openModal(id) {
    selectPlaces.current = id;
    setModalIsOpen(true);
  }

  const closeModal = () => setModalIsOpen(false);

  function handleSelectPlaces(id) {
    setUserPlaces(prevUserPlaces => {
      if (prevUserPlaces.some(place => place.id === id)) return prevUserPlaces;
      const place = availablesPlaces.find(place => place.id === id);
      const updatedPlaces = [...prevUserPlaces, place];

      if (userPosition) 
        return sortPlacesByDistance(updatedPlaces, userPosition.latitude, userPosition.longitude);
      return updatedPlaces;
    });
    const storedIds = JSON.parse(localStorage.getItem('selectedPlaces')) || [];
    if (storedIds.indexOf(id) === -1) {
      localStorage.setItem('selectedPlaces', JSON.stringify([...storedIds, id]));
    }
  }

  const handleRemovePlace = () => {
    setUserPlaces(prevUserPlaces =>
      prevUserPlaces.filter(place => place.id !== selectPlaces.current)
    );
    setModalIsOpen(false);
    const storedIds = JSON.parse(localStorage.getItem('selectedPlaces')) || [];
    localStorage.setItem('selectedPlaces', JSON.stringify(storedIds.filter(id => id !== selectedPlace.current)));
  };

  return (
    <>
      <Modal open={modelIsOpen} onClose={closeModal}>
        <DeleteConfirmation onCancel={closeModal} onConfirm={handleRemovePlace} />
      </Modal>
      <header>
        <img src={logoImg} alt="Logo" />
        <h1>placePicker</h1>
        <p>Create your personal collection of places you would like to visit or have visited.</p>
      </header>

      <main>
          <Places
            title="I'd like to visit ..."
            fallbackText="Select the places you would like to visit below."
            places={userPlaces}
            onClick={openModal}
          />
        <Places
          title="Available Places"
          fallbackText="Sorting places by distance..."
          places={availablesPlaces}
          onClick={handleSelectPlaces}
        />
      </main>
    </>
  );
}

export default App;
