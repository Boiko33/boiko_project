import React from "react";
import WeatherButton from './WeatherButton';
import WeatherInfo from './WeatherInfo';
import {WeatherContextConsumer} from "./../../../../WeatherContext"

const WeatherWidget = (props) => {
    return (
        <WeatherContextConsumer>
            {context => (
                <div>
                <WeatherButton weatherMethod={context.gettingWeather} />
                <WeatherInfo
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

export default WeatherWidget;