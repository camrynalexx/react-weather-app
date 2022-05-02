import React, { useState } from "react";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios"
import WeatherInfo from "./WeatherInfo";


export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity)
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  
  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "281450ec88936f4fa8ee9864682b49a0";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

  }

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000)
    });
  }

  if (weatherData.ready) {
    return (
      <div className="container">
        <div className="Weather">
          <form onSubmit={handleSubmit} className="searchForm">
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Search for a city..."
                  className="cityInput rounded shadow w-100"
                  autoFocus="on"
                  onChange={handleCityChange}
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="Search"
                  className="btn border rounded w-100 shadow"
                />
              </div>
            </div>
          </form>
          <hr className="mt-5" />
          <WeatherInfo data={weatherData} />
          <footer className="text-center">
            <hr className="mb-5" />
            This project was coded by Camryn Lee and is
            <a
              href="https://github.com/camrynalexx/react-weather-app.git"
              target=""
              className="githubLink"
            >
              {" "}
              open-sourced on GitHub
            </a>{" "}
            and
            <a
              href="https://playful-kataifi-93547f.netlify.app"
              target=""
              className="netlifyLink"
            >
              {" "}
              hosted on Netlify
            </a>
          </footer>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  };
}
