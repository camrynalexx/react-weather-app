import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

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
                {props.data.wind}
                <span className="windUnit"> km/h </span>
              </li>
            </ul>
          </div>
          <div className="col-6">
            <span className="weatherImage">
              <WeatherIcon code={props.data.icon} />
            </span>
            <span>
              <WeatherTemperature celsius={props.data.temperature} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
