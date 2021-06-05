import React from 'react';
import DogTile from './DogTile';

function DogBar({ dogs, setDogInfo, isOn, filterDogs, unfilterDogs }) {
    const dogTiles = dogs.map(dog => {
        return <DogTile key={`dog-${dog.id}`} dog={dog} setDogInfo={setDogInfo} />
    })
    return (
        <div>
            <div id="filter-div">
                {isOn ? <button id="good-dog-filter" onClick={unfilterDogs} >Filter good dogs: ON</button> :
                    <button id="good-dog-filter" onClick={filterDogs} >Filter good dogs: OFF</button>}
            </div>
            <div id="dog-bar">
                {dogTiles}
            </div>
        </div>
    )
}

export default DogBar;