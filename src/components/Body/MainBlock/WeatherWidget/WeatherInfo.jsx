import React from "react";
import "./../MainBlock.css";

const WeatherInfo = (props) => {
 
    return (
        <div className="weatherText">
            {props.city &&
                <div>
                    <h3 className="cityName">{props.city}</h3>
                    <p>Температура: <span className="infoText">{props.temp} ℃</span></p>
                    <p>Ощущается: <span className="infoText">{props.feels} ℃</span></p>
                    <p>Погодные условия: <span className="infoText">{props.description}</span></p>
                </div>
            }
        </div>
    );
}

export default WeatherInfo;