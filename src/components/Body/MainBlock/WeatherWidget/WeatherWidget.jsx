import React from "react";
import WeatherButton from "./WeatherButton";
import WeatherInfo from "./WeatherInfo";

const API_KEY = "83d136d27c47cb2304ff75c17a631a9d";

class WeatherWidget extends React.Component {
    state = {
        city: undefined,
        temp: undefined,
        feels: undefined,
        description: undefined
    }

    gettingWeather = async (event) => {
        event.preventDefault();
        const api_url = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Kropyvnytskyi&lang=ru&units=metric&APPID=${API_KEY}`);
        const data = await api_url.json();
        console.log(data);
    
    this.setState({
            city: data.city.name,
            temp: data.list[0].main.temp,
            feels: data.list[0].main.feels_like,
            description: data.list[0].weather[0].description,
        })
    }
    render() {
        return (
        <div>
            <WeatherButton weatherMethod={this.gettingWeather} />
            <WeatherInfo
                city={this.state.city}
                temp={this.state.temp}
                feels={this.state.feels}
                description={this.state.description}
            />
        </div>
    );
}
}

export default WeatherWidget;