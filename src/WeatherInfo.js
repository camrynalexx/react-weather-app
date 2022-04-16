import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="infoContainer mt-4">
        <div className="row">
          <div className="col-6">
            <h1 className="mb-3">{props.data.city}</h1>
            <ul>
              <li>
                <strong>
                  <FormattedDate date={props.data.date} />
                  <span className="description">{props.data.description}</span>
                </strong>
              </li>
              <li>
                <strong> Humidity: </strong> {props.data.humidity}%,{" "}
                <strong> Wind: </strong>
                {props.dataata.wind}
                <span className="windUnit"> km/h </span>
              </li>
            </ul>
          </div>
          <div className="col-6">
            <div className="temperatureContainer">
              <span>
                <img
                  className="weatherImage"
                  src={props.data.iconUrl}
                  alt={props.data.description}
                />
              </span>
              <span className="temperature">
                {Math.round(props.data.temperature)}
              </span>
              <span className="unit">°F</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
