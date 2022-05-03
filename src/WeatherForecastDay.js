import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
 function maxTemperature() {
    let temperature = Math.round((props.data.temp.max) * 9 / 5) + 32;
    return  `${temperature}`;
 }
 function minTemperature() {
   let temperature = Math.round((props.data.temp.min) * 9 / 5) + 32;
   return `${temperature}`;
 }

 function day() {
     let date = new Date(props.data.dt * 1000);
     let day = date.getDay();

     let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

     return days[day]
 }

 return (
     <div>
      <div className="WeatherForecast-day mb-2">{day()}</div>
       <div className="WeatherForecast-icon">
         <WeatherIcon code={props.data.weather[0].icon} size={52} />
        </div>
        <div className="WeatherForecast-temp mt-2">
         <span className="WeatherTemp-max">{maxTemperature()}°{""} </span>
         <span className="WeatherTemp-min">{minTemperature()}°</span>
        </div>
    </div>
    );
}