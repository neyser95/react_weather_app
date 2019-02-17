import React from 'react';

const CityModel = (props) => {
  return (
    <div id='city-model'>
      <h2 id='city-model-title'>Search for a location</h2>
      <input type="text" id='city-model-input' placeholder='Enter a city' value={props.userInput} onChange={(e) => { props.handleInput(e) }} />
      <button id='city-model-btn' onClick={(e) => { props.handleSearch(e) }}>Search</button>
    </div>
  );
}

export default CityModel;