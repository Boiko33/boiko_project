import React from "react";
import WeatherButtonSecond from './WeatherButtonSecond';
import WeatherInfoSecond from './WeatherInfoSecond';
import "./../AboutMe.css"
import {WeatherContextConsumer} from "../../../../WeatherContext"

const WeatherWidgetSecond = (props) => {
    return (
        <WeatherContextConsumer>
            {context => (
                <div className="weatherWidgetSecond col-xs-12 col-sm-12 col-md-3 col-xl-3">
                <WeatherButtonSecond weatherMethod={context.gettingWeather} />
                <WeatherInfoSecond
                    city={context.state.city}
                    temp={context.state.temp}
                    feels={context.state.feels}
                    description={context.state.description}
                />
            </div>
            )}
        </WeatherContextConsumer>
    );
} 


export default WeatherWidgetSecond;