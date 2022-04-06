import React from "react";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Weather() {
  let weatherData = {
    city: "San Francisco",
    date: "Sunday 05:37pm",
    humidity: "70",
    wind: "0.43",
  };

  return (
    <div className="Weather">
      <form className="searchForm">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Search for a City..."
              className="cityInput"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn border rounded w-100"
            />
          </div>
        </div>
      </form>
      <hr className="pageLine" />
      <div className="infoContainer">
        <div className="row">
          <div className="col">
            <h1>{weatherData.city}</h1>
            <ul>
              <li>
                <span> {weatherData.date} </span>
              </li>
              <li>
                Humidity: <strong>{weatherData.humidity}%</strong>, Wind:
                <strong> {weatherData.wind}</strong>
                <span className="windUnit"> km/h </span>
              </li>
            </ul>
          </div>
          <div className="col">
            <div className="temperatureContainer">
              <span></span>
              <span>°F</span>
            </div>
          </div>
        </div>
      </div>
      <div className="weatherForecast"></div>
      <hr />
      <footer>
        This project was coded by Camryn Lee and is
        <a
          href="https://github.com/camrynalexx/weatherapp.git"
          target=""
          className="githubLink"
        >
          open-sourced on GitHub
        </a>
        and
        <a
          href="https://sharp-lumiere-bae265.netlify.app/"
          target=""
          className="netlifyLink"
        >
          hosted on Netlify
        </a>
      </footer>
    </div>
  );
}
