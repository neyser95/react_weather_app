import React, { Component } from 'react';
import CityModel from './CityModel';

class App extends Component {
  constructor() {
    super(),
      this.state = {
        url: 'https://api.openweathermap.org/data/2.5/forecast?appid=fe350fdd5cf2042a016c2eca2ef6252c&q=',
        city: '',
        forecast: {},
      }
  }

  handleUserSearch(e) {
    const city = this.state.city.trim();
    const url = `${this.state.url}${city}`;

    fetch(url)
      .then(res => res.json())
      .then(res => console.log(res))
      .catch(err => new Error(err));
  }

  handleUserInput(e) {
    const userInput = e.target.value;

    this.setState({city: userInput});
  }

  render() {
    return (
      <div id='main-body'>
        <h1 id='main-body-title'>Weather Forecast</h1>
        <CityModel
          handleSearch={this.handleUserSearch.bind(this)}
          userInput={this.state.city}
          handleInput={this.handleUserInput.bind(this)}
        />
      </div>
    );
  }
}

export default App;