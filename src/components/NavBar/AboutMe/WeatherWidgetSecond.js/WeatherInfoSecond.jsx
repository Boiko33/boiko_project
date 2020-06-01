import React from "react";
import "./../AboutMe.css";

const WeatherInfoSecond = (props) => {
 
    return (
        <div className="weatherTextSecond">
            {props.city &&
                <div>
                    <h3 className="cityNameSecond">{props.city}</h3>
                    <p>Температура: <span className="infoTextSecond">{props.temp} ℃</span></p>
                    <p>Ощущается: <span className="infoTextSecond">{props.feels} ℃</span></p>
                    <p>Погодные условия: <span className="infoTextSecond">{props.description}</span></p>
                </div>
            }
        </div>
    );
}

export default WeatherInfoSecond;