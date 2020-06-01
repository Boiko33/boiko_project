import React, { Component } from 'react';
const { Provider, Consumer } = React.createContext();

class WeatherContextProvider extends Component {
    state = {
        city: undefined,
        temp: undefined,
        feels: undefined,
        description: undefined,
        API_KEY: "83d136d27c47cb2304ff75c17a631a9d"
    }

    gettingWeather = async (event) => {
        event.preventDefault();
        const api_url = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Kropyvnytskyi&lang=ru&units=metric&APPID=${this.state.API_KEY}`);
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
            <Provider value={{ state: this.state, gettingWeather: this.gettingWeather }}>
                {this.props.children}
            </Provider>
        );
    }
}

export { WeatherContextProvider, Consumer as WeatherContextConsumer };
