import React from 'react'

function ImageContainer({ dogInfo, toggleDogBehavior }) {
    function handleClick() {
        toggleDogBehavior(dogInfo)
    }
    return (
        <div id="dog-summary-container">
            <div id="dog-info">
                <img src={dogInfo.image} alt={dogInfo.name} />
                <h2>{dogInfo.name}</h2>
                <button onClick={handleClick} >{dogInfo.isGoodDog ? "Good" : "Bad"}</button>
            </div>
        </div>
    )
}

export default ImageContainer