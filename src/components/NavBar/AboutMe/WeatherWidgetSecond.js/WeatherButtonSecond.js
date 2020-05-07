import React from "react";

const WeatherButtonSecond = (props) => {
    return (
        <form onSubmit={props.weatherMethod}>
            <button className="btn btn-primary btn-lg">Показать погоду</button>
        </form>
    );
}

export default WeatherButtonSecond;