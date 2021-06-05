import React, { useEffect, useState } from "react";
import DogBar from "./DogBar";
import ImageContainer from "./ImageContainer";

function App() {
  const baseURL = "http://localhost:3001/pups"
  const [dogs, setDogs] = useState([]);
  const [dogInfo, setDogInfo] = useState(null);
  const [isOn, setIsOn] = useState(false);
  const [isOff, setIsOff] = useState(true);

  useEffect(() => {
    fetch(baseURL)
      .then(resp => resp.json())
      .then(data => {
        setDogs(data)
      })
  }, [isOff]);

  function toggleDogBehavior(dog) {
    const configObj = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        isGoodDog: !dog.isGoodDog
      })
    }
    fetch(`${baseURL}/${dog.id}`, configObj)
      .then(resp => resp.json())
      .then(newDog => {
        const newDogs = dogs.map(oldDog => {
          if (oldDog.id === newDog.id) {
            return newDog
          }
          return oldDog
        })
        setDogs(newDogs)
        setDogInfo(newDog)
      })
  }

  function filterDogs() {
    const filteredDogs = dogs.filter(dog => dog.isGoodDog)
    setDogs(filteredDogs)
    setIsOn(isOn => !isOn)
  }

  function unfilterDogs() {
    setIsOn(false)
    setIsOff(isOff => !isOff)
  }

  return (
    <div className="App">
      <DogBar dogs={dogs}
        setDogInfo={setDogInfo}
        isOn={isOn}
        filterDogs={filterDogs}
        unfilterDogs={unfilterDogs} />
      <h1>DOGGO:</h1>
      {dogInfo && <ImageContainer dogInfo={dogInfo} toggleDogBehavior={toggleDogBehavior} />}
    </div>
  );
}

export default App;