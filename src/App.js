import React, { Component } from 'react';

import './App.css';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = "d56b7ffc8abb91891d10298bb307f0e9";
class App extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
    
  }
  getWeather = async (event) => {
    event.preventDefault();
    const city = event.target.elements.city.value;
    const country = event.target.elements.country.value;
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    this.setState({
      temperature: data.main.temp,
      city: data.name,
      country: data.sys.counntry,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      error: '';
    })
  }
  render() {
    return (
      <div className="App">
        <Titles />
        <Form getWeather={this.getWeather} />
        <Weather />
      </div>
    );
  }
}

export default App;
