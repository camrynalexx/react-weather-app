import React from "react";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

export default function Weather() {
  function handleResponse(response) {
    console.log(response.data);
  }

  const apiKey = "281450ec88936f4fa8ee9864682b49a0";
  let city = "San Francisco";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  axios.get(apiUrl).then(handleResponse);

  let weatherData = {
    city: "San Francisco",
    date: "Sunday 05:37",
    humidity: "70",
    wind: "0.43",
  };

  return (
    <div className="container">
      <div className="Weather">
        <form className="searchForm">
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Search for a city..."
                className="cityInput rounded shadow w-100"
                autoFocus="on"
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
        <div className="infoContainer mt-4">
          <div className="row">
            <div className="col-6">
              <h1>{weatherData.city}</h1>
              <ul>
                <strong>
                  <li>
                    <span> {weatherData.date} </span>
                  </li>
                  <li>
                    Humidity: <strong>{weatherData.humidity}%</strong>, Wind:
                    <strong> {weatherData.wind}</strong>
                    <span className="windUnit"> km/h </span>
                  </li>
                </strong>
              </ul>
            </div>
            <div className="col-6">
              <div className="temperatureContainer">
                <span>
                  <img
                    className="weatherImage"
                    src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                    alt="cloudy"
                  ></img>
                </span>
                <span className="temperature">48</span>
                <span className="unit">°F</span>
              </div>
            </div>
          </div>
        </div>
        <div className="weatherForecast"></div>
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
}
